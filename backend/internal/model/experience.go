package model

type ExperienceProfile struct {
	Description string
	Experiences []Experience
}

type Experience struct {
	Role        string
	Company     string
	Description string
	Period      string
	Highlights  []string
}
