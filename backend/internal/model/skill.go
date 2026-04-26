package model

type SkillProfile struct {
	Description string
	SkillGroups []SkillGroup
}

type SkillGroup struct {
	Title  string
	Skills []string
	Icon   string
}
