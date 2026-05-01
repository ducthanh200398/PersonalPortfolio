package main

import (
	"context"
	"fmt"
	"time"

	"ducthanh200398/PersonalPortfolio/backend/internal/handler"
	"ducthanh200398/PersonalPortfolio/backend/internal/repository"
	"ducthanh200398/PersonalPortfolio/backend/internal/routes"
	"ducthanh200398/PersonalPortfolio/backend/internal/service"
	"ducthanh200398/PersonalPortfolio/backend/pkg/config"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"go.uber.org/fx"
	"go.uber.org/fx/fxevent"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

func main() {
	fx.New(
		fx.WithLogger(func(log *zap.Logger) fxevent.Logger {
			return &fxevent.ZapLogger{Logger: log}
		}),
		fx.Provide(
			config.Load,
			NewLogger,
			NewPortfolioRepository,
			service.NewPortfolioService,
			handler.NewPortfolioHandler,
			routes.NewPortfolioRoutes,
			NewFiberApp,
		),
		fx.Invoke(RegisterRoutes),
		fx.Invoke(StartServer),
	).Run()
}

func NewPortfolioRepository(cfg *config.Config) repository.PortfolioRepository {

	return repository.NewPortfolioStorage(cfg)
}

func NewLogger(cfg *config.Config) (*zap.Logger, error) {
	level := zapcore.InfoLevel
	if cfg.Server.Host != "production" {
		level = zapcore.DebugLevel
	}

	config := zap.NewProductionConfig()
	config.Level = zap.NewAtomicLevelAt(level)
	config.EncoderConfig.TimeKey = "timestamp"
	config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder

	return config.Build()
}

func NewFiberApp(cfg *config.Config) *fiber.App {
	app := fiber.New(fiber.Config{
		ReadTimeout:  cfg.Server.ReadTimeout,
		WriteTimeout: cfg.Server.WriteTimeout,
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError
			if e, ok := err.(*fiber.Error); ok {
				code = e.Code
			}
			return c.Status(code).JSON(fiber.Map{
				"error": err.Error(),
			})
		},
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders: "Origin,Content-Type,Accept,Authorization",
	}))
	app.Use(recover.New())
	app.Use(logger.New(logger.Config{
		Format: "[${time}] ${status} - ${method} ${path}\n",
	}))

	return app
}

func RegisterRoutes(app *fiber.App, portfolioRoutes *routes.PortfolioRoutes) {
	api := app.Group("/api/v1")
	portfolioRoutes.RegisterRoutes(api)

	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status":    "healthy",
			"timestamp": time.Now().Unix(),
		})
	})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Personal Portfolio API",
			"version": "1.0.0",
		})
	})
}

func StartServer(lifecycle fx.Lifecycle, app *fiber.App, cfg *config.Config, log *zap.Logger) {
	lifecycle.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			go func() {
				log.Info("Starting Personal Portfolio API Server...",
					zap.String("port", cfg.Server.Port))
				if err := app.Listen(fmt.Sprintf(":%s", cfg.Server.Port)); err != nil {
					log.Fatal("Server failed to start", zap.Error(err))
				}
			}()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			log.Info("Shutting down server...")

			shutdownCtx, cancel := context.WithTimeout(ctx, 30*time.Second)
			defer cancel()

			done := make(chan error, 1)
			go func() {
				done <- app.Shutdown()
			}()

			select {
			case err := <-done:
				if err != nil {
					log.Error("Server shutdown error", zap.Error(err))
				}
			case <-shutdownCtx.Done():
				log.Error("Server shutdown timeout")
			}

			log.Info("Server exited")
			return nil
		},
	})
}
