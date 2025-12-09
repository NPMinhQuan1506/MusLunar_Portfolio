package project

import "errors"

// Domain-level errors.
var (
	ErrNotFound = errors.New("project not found")
)
