package model

type ExperienceProfile struct {
	Description string       `toml:"Description"`
	Experiences []Experience `toml:"Experiences"`
}

type Experience struct {
	Role        string   `toml:"Role"`
	Company     string   `toml:"Company"`
	Description string   `toml:"Description"`
	Period      string   `toml:"Period"`
	Highlights  []string `toml:"Highlights"`
}
