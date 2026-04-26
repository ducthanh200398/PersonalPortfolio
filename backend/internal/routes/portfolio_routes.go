package routes

import (
	"ducthanh200398/PersonalPortfolio/backend/internal/handler"

	"github.com/gofiber/fiber/v2"
)

type PortfolioRoutes struct {
	handler handler.PortfolioHandler
}

func NewPortfolioRoutes(handler handler.PortfolioHandler) *PortfolioRoutes {
	return &PortfolioRoutes{
		handler: handler,
	}
}

func (r *PortfolioRoutes) RegisterRoutes(router fiber.Router) {
	router.Get("/portfolio", r.handler.GetPortfolio)
}
