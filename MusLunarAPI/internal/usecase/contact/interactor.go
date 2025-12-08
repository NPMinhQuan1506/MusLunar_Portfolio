package contact

import (
	"crypto/rand"
	"encoding/hex"
	"errors"
	"strings"

	domain "muslunarapi/internal/domain/contact"
)

// Service handles contact submissions.
type Service interface {
	Submit(msg domain.Message) (string, error)
}

type service struct{}

// NewService constructs a contact use case.
func NewService() Service {
	return &service{}
}

func (s *service) Submit(msg domain.Message) (string, error) {
	if err := validate(msg); err != nil {
		return "", err
	}
	return randomID(), nil
}

func validate(msg domain.Message) error {
	if strings.TrimSpace(msg.Name) == "" {
		return errors.New("name is required")
	}
	if !strings.Contains(msg.Email, "@") {
		return errors.New("email is invalid")
	}
	if !msg.Consent {
		return errors.New("consent required")
	}
	return nil
}

func randomID() string {
	b := make([]byte, 8)
	if _, err := rand.Read(b); err != nil {
		return "contact-id"
	}
	return hex.EncodeToString(b)
}
