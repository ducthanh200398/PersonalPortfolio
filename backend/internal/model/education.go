package model

type EducationProfile struct {
	Educations []Education `toml:"Educations"`
}

type Education struct {
	Organization string `toml:"Organization"`
	Major        string `toml:"Major"`
	Description  string `toml:"Description"`
}
