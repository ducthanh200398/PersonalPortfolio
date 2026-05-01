package model

type UserProfile struct {
	FullName string   `toml:"FullName"`
	JobTitle string   `toml:"JobTitle"`
	TechTags []string `toml:"TechTags"`
	Location string   `toml:"Location"`
	Email    string   `toml:"Email"`
	LinkedIn string   `toml:"LinkedIn"`
	GitHub   string   `toml:"GitHub"`
	Facebook string   `toml:"Facebook"`
}
