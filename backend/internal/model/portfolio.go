package model

type PortfolioProfile struct {
	UserProfile       UserProfile       `toml:"User"`
	SkillProfile      SkillProfile      `toml:"SkillProfile"`
	ExperienceProfile ExperienceProfile `toml:"ExperienceProfile"`
	EducationProfile  EducationProfile  `toml:"EducationProfile"`
	ProjectsProfile   ProjectsProfile   `toml:"ProjectsProfile"`
}
