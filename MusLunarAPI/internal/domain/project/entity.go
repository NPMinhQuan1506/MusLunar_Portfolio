package project

import "time"

// Project represents a portfolio project exposed via the API.
type Project struct {
	ID          string    `json:"id"`
	Slug        string    `json:"slug"`
	Title       string    `json:"title"`
	Summary     string    `json:"summary"`
	RoleFocus   string    `json:"roleFocus"`
	Locale      string    `json:"locale"`
	PublishedAt time.Time `json:"publishedAt"`
	Tags        []string  `json:"tags"`
}
