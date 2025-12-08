package config

import (
	"os"
	"strings"
)

// Config holds runtime configuration for the application.
type Config struct {
	AppName      string
	Port         string
	AllowedHosts []string
}

// Load reads environment variables with sane defaults.
func Load() Config {
	return Config{
		AppName:      getEnv("APP_NAME", "MusLunarAPI"),
		Port:         getEnv("PORT", "8080"),
		AllowedHosts: splitAndClean(os.Getenv("CORS_ALLOW_ORIGINS")),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func splitAndClean(value string) []string {
	if value == "" {
		return nil
	}
	parts := strings.Split(value, ",")
	out := make([]string, 0, len(parts))
	for _, p := range parts {
		if s := strings.TrimSpace(p); s != "" {
			out = append(out, s)
		}
	}
	return out
}
