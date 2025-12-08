package project

import "time"

// Project represents a portfolio project in the domain layer.
type Project struct {
	ID          string
	Slug        string
	Title       string
	Summary     string
	RoleFocus   string
	Locale      string
	Tags        []string
	PublishedAt time.Time
}
