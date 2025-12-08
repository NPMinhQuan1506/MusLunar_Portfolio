package project

import (
	"context"
	"strings"

	domain "muslunarapi/internal/domain/project"
)

// Repository defines the dependency the use case needs.
type Repository interface {
	List(ctx context.Context, f Filter) ([]domain.Project, error)
	GetBySlug(ctx context.Context, slug string) (*domain.Project, error)
}

// Service exposes project use cases.
type Service interface {
	List(ctx context.Context, f Filter) ([]domain.Project, error)
	Get(ctx context.Context, slug string) (*domain.Project, error)
}

type service struct {
	repo Repository
}

// NewService constructs a project use case service.
func NewService(repo Repository) Service {
	return &service{repo: repo}
}

func (s *service) List(ctx context.Context, f Filter) ([]domain.Project, error) {
	f.Role = strings.ToLower(strings.TrimSpace(f.Role))
	f.Locale = strings.ToLower(strings.TrimSpace(f.Locale))
	return s.repo.List(ctx, f)
}

func (s *service) Get(ctx context.Context, slug string) (*domain.Project, error) {
	slug = strings.TrimSpace(slug)
	if slug == "" {
		return nil, domain.ErrNotFound
	}
	return s.repo.GetBySlug(ctx, slug)
}
