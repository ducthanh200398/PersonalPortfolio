package service

import (
	"ducthanh200398/PersonalPortfolio/backend/internal/model"
	"ducthanh200398/PersonalPortfolio/backend/internal/repository"
)

type PortfolioService interface {
	GetPortfolio() (*model.PortfolioProfile, error)
}

type portfolioService struct {
	repo repository.PortfolioRepository
}

func NewPortfolioService(repo repository.PortfolioRepository) PortfolioService {
	return &portfolioService{
		repo: repo,
	}
}

func (s *portfolioService) GetPortfolio() (*model.PortfolioProfile, error) {
	return s.repo.LoadPortfolio()
}
