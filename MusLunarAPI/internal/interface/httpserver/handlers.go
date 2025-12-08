package httpserver

import (
	"net/http"

	"github.com/labstack/echo/v4"

	domainContact "muslunarapi/internal/domain/contact"
	domainProject "muslunarapi/internal/domain/project"
	"muslunarapi/internal/usecase/project"
)

func (s *HTTPServer) handleListProjects(c echo.Context) error {
	role := c.QueryParam("role")
	locale := c.QueryParam("locale")
	items, err := s.projectUC.List(c.Request().Context(), project.Filter{Role: role, Locale: locale})
	if err != nil {
		return c.JSON(http.StatusInternalServerError, errorPayload("list_failed", err.Error()))
	}
	return c.JSON(http.StatusOK, echo.Map{
		"data":       items,
		"request_id": c.Response().Header().Get(echo.HeaderXRequestID),
	})
}

func (s *HTTPServer) handleGetProject(c echo.Context) error {
	slug := c.Param("slug")
	item, err := s.projectUC.Get(c.Request().Context(), slug)
	if err != nil {
		if err == domainProject.ErrNotFound {
			return c.JSON(http.StatusNotFound, errorPayload("not_found", "project not found"))
		}
		return c.JSON(http.StatusInternalServerError, errorPayload("fetch_failed", err.Error()))
	}
	return c.JSON(http.StatusOK, echo.Map{
		"data":       item,
		"request_id": c.Response().Header().Get(echo.HeaderXRequestID),
	})
}

func (s *HTTPServer) handleSubmitContact(c echo.Context) error {
	var payload contactRequest
	if err := c.Bind(&payload); err != nil {
		return c.JSON(http.StatusBadRequest, errorPayload("invalid_body", "could not parse body"))
	}
	id, err := s.contactUC.Submit(domainContact.Message{
		Name:    payload.Name,
		Email:   payload.Email,
		Role:    payload.Role,
		Content: payload.Message,
		Consent: payload.Consent,
	})
	if err != nil {
		return c.JSON(http.StatusBadRequest, errorPayload("validation_error", err.Error()))
	}
	return c.JSON(http.StatusCreated, echo.Map{
		"id":         id,
		"request_id": c.Response().Header().Get(echo.HeaderXRequestID),
	})
}

type contactRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Role    string `json:"role"`
	Message string `json:"message"`
	Consent bool   `json:"consent"`
}

func errorPayload(code, msg string) echo.Map {
	return echo.Map{
		"error": echo.Map{
			"code":    code,
			"message": msg,
		},
	}
}
