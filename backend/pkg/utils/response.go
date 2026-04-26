package utils

import (
	"github.com/gofiber/fiber/v2"
)

type APIResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty"`
	Message string      `json:"message,omitempty"`
}

func SuccessResponse(c *fiber.Ctx, statusCode int, data interface{}) error {
	return c.Status(statusCode).JSON(APIResponse{
		Success: true,
		Data:    data,
	})
}

func ErrorResponse(c *fiber.Ctx, statusCode int, err error) error {
	return c.Status(statusCode).JSON(APIResponse{
		Success: false,
		Error:   err.Error(),
	})
}

func MessageResponse(c *fiber.Ctx, statusCode int, message string) error {
	return c.Status(statusCode).JSON(APIResponse{
		Success: true,
		Message: message,
	})
}

func ValidationErrorResponse(c *fiber.Ctx, errors []string) error {
	return c.Status(fiber.StatusBadRequest).JSON(APIResponse{
		Success: false,
		Error:   "validation failed",
		Data:    errors,
	})
}
