package model

type SkillProfile struct {
	Description string       `toml:"Description"`
	SkillGroups []SkillGroup `toml:"SkillGroups"`
}

type SkillGroup struct {
	Title  string   `toml:"Title"`
	Skills []string `toml:"Skills"`
	Icon   string   `toml:"Icon"`
}
