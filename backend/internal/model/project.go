package model

type ProjectsProfile struct {
	Description string    `toml:"Description"`
	Projects    []Project `toml:"Projects"`
}

type Project struct {
	Title        string   `toml:"Title"`
	Subtitle     string   `toml:"Subtitle"`
	Client       string   `toml:"Client"`
	Icon         string   `toml:"Icon"`
	Description  string   `toml:"Description"`
	Technologies []string `toml:"Technologies"`
	Highlights   []string `toml:"Highlights"`
}
