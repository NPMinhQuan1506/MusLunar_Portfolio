package main

import (
	"log"

	"muslunarapi/internal/infrastructure/config"
	"muslunarapi/internal/infrastructure/repository"
	"muslunarapi/internal/interface/httpserver"
	"muslunarapi/internal/usecase/contact"
	"muslunarapi/internal/usecase/project"
)

func main() {
	cfg := config.Load()

	projectRepo := repository.NewProjectMemory()
	projectUC := project.NewService(projectRepo)
	contactUC := contact.NewService()

	server := httpserver.New(cfg, projectUC, contactUC)
	if err := server.Start(); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
