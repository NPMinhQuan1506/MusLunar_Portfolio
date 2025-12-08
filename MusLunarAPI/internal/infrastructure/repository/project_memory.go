package repository

import (
	"context"
	"time"

	domain "muslunarapi/internal/domain/project"
	"muslunarapi/internal/usecase/project"
)

// NewProjectMemory creates an in-memory repo for demo/local use.
func NewProjectMemory() project.Repository {
	seed := []domain.Project{
		{ID: "1", Slug: "stellar-showcase", Title: "Stellar Showcase", Summary: "Role-tailored portfolio experience.", RoleFocus: "recruiter", Locale: "en", PublishedAt: time.Now().AddDate(0, -1, 0), Tags: []string{"nextjs", "ux"}},
		{ID: "2", Slug: "client-delivery", Title: "Client Delivery", Summary: "Case studies for business outcomes.", RoleFocus: "client", Locale: "en", PublishedAt: time.Now().AddDate(0, -2, 0), Tags: []string{"go", "supabase"}},
		{ID: "3", Slug: "creative-journey", Title: "Creative Journey", Summary: "Playful viewer path.", RoleFocus: "viewer", Locale: "en", PublishedAt: time.Now().AddDate(0, -3, 0), Tags: []string{"3d", "motion"}},
	}
	return &projectMemory{items: seed}
}

type projectMemory struct {
	items []domain.Project
}

func (m *projectMemory) List(_ context.Context, f project.Filter) ([]domain.Project, error) {
	out := make([]domain.Project, 0, len(m.items))
	for _, p := range m.items {
		if f.Role != "" && p.RoleFocus != f.Role {
			continue
		}
		if f.Locale != "" && p.Locale != f.Locale {
			continue
		}
		out = append(out, p)
	}
	return out, nil
}

func (m *projectMemory) GetBySlug(_ context.Context, slug string) (*domain.Project, error) {
	for _, p := range m.items {
		if p.Slug == slug {
			cp := p
			return &cp, nil
		}
	}
	return nil, domain.ErrNotFound
}
