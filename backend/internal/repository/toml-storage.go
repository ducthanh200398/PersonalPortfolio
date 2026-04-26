package repository

import (
	"ducthanh200398/PersonalPortfolio/backend/internal/model"
	"ducthanh200398/PersonalPortfolio/backend/pkg/config"
	"fmt"
	"os"

	"github.com/BurntSushi/toml"
)

type PortfolioRepository interface {
	LoadPortfolio() (*model.PortfolioProfile, error)
}
type portfolioRepository struct {
	filePath string
}

func NewPortfolioStorage(cfg *config.Config) PortfolioRepository {
	return &portfolioRepository{
		filePath: cfg.DataFolder,
	}
}

func (s *portfolioRepository) LoadPortfolio() (*model.PortfolioProfile, error) {
	data, err := os.ReadFile(s.filePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read TOML file: %w", err)
	}

	var portfolio model.PortfolioProfile
	if _, err := toml.Decode(string(data), &portfolio); err != nil {
		return nil, fmt.Errorf("failed to parse TOML: %w", err)
	}

	return &portfolio, nil
}
