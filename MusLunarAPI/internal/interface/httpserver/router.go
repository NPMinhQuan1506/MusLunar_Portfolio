package httpserver

import (
	"fmt"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"muslunarapi/internal/infrastructure/config"
	"muslunarapi/internal/usecase/contact"
	"muslunarapi/internal/usecase/project"
)

// HTTPServer wires Echo with adapters and starts the HTTP server.
type HTTPServer struct {
	cfg         config.Config
	projectUC   project.Service
	contactUC   contact.Service
	engine      *echo.Echo
}

// New constructs an HTTP server with routes and middleware.
func New(cfg config.Config, projectUC project.Service, contactUC contact.Service) *HTTPServer {
	e := echo.New()
	e.HideBanner = true
	e.HidePort = true

	e.Use(middleware.Recover())
	e.Use(middleware.RequestID())
	e.Use(middleware.Logger())
	e.Use(middleware.Secure())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: cfg.AllowedHosts,
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodOptions},
	}))

	s := &HTTPServer{
		cfg:       cfg,
		projectUC: projectUC,
		contactUC: contactUC,
		engine:    e,
	}
	s.registerRoutes()
	return s
}

// Start begins listening on configured port.
func (s *HTTPServer) Start() error {
	addr := fmt.Sprintf(":%s", s.cfg.Port)
	return s.engine.StartServer(&http.Server{
		Addr:              addr,
		ReadTimeout:       10 * time.Second,
		WriteTimeout:      10 * time.Second,
		ReadHeaderTimeout: 5 * time.Second,
	})
}

func (s *HTTPServer) registerRoutes() {
	s.engine.GET("/healthz", func(c echo.Context) error {
		return c.JSON(http.StatusOK, echo.Map{
			"status": "ok",
			"app":    s.cfg.AppName,
		})
	})

	s.engine.GET("/version", func(c echo.Context) error {
		return c.JSON(http.StatusOK, echo.Map{
			"version": "v1",
			"service": s.cfg.AppName,
		})
	})

	api := s.engine.Group("/api/v1")
	api.GET("/projects", s.handleListProjects)
	api.GET("/projects/:slug", s.handleGetProject)
	api.POST("/contact-messages", s.handleSubmitContact)
}
