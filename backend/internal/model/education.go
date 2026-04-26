package model

type EducationProfile struct {
	Educations []Education
}

type Education struct {
	Organization string
	Major        string
	Description  string
}
