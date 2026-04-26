package handler

import (
	"ducthanh200398/PersonalPortfolio/backend/internal/service"

	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"
)

type PortfolioHandler interface {
	GetPortfolio(c *fiber.Ctx) error
}

type portfolioHandler struct {
	service service.PortfolioService
	logger  *zap.Logger
}

func NewPortfolioHandler(
	service service.PortfolioService,
	logger *zap.Logger,

) PortfolioHandler {
	return &portfolioHandler{
		service: service,
		logger:  logger,
	}
}

func (h *portfolioHandler) GetPortfolio(c *fiber.Ctx) error {
	portfolio, err := h.service.GetPortfolio()
	if err != nil {
		h.logger.Error("Error getting portfolio", zap.Error(err))
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(portfolio)
}
