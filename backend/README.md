# Personal Portfolio Backend API

A clean architecture Go backend API for the Personal Portfolio project.

## Project Structure

This project follows Clean Architecture principles with the following structure:

```
backend/
├── cmd/                    # Application entry points
│   └── api/
│       └── main.go        # Main application entry point
├── internal/              # Private application code
│   ├── domain/           # Domain layer (entities, repositories interfaces)
│   │   ├── entities/     # Business entities
│   │   └── repositories/ # Repository interfaces
│   ├── application/      # Application layer (use cases, services)
│   │   ├── usecases/     # Business use cases
│   │   └── services/     # Application services
│   ├── infrastructure/   # Infrastructure layer (database, external APIs)
│   │   ├── database/     # Database connections and configurations
│   │   ├── repositories/ # Repository implementations
│   │   └── external/     # External service integrations
│   └── presentation/     # Presentation layer (handlers, middleware, routes)
│       ├── handlers/     # HTTP handlers
│       ├── middleware/   # HTTP middleware
│       └── routes/       # Route definitions
├── pkg/                  # Public library code
│   ├── config/          # Configuration management
│   ├── logger/          # Logging utilities
│   └── utils/           # General utilities
├── migrations/           # Database migration files
├── tests/               # Test files
├── go.mod              # Go module file
├── .env.example        # Environment variables example
└── README.md           # This file
```

## Features

- **Clean Architecture**: Separation of concerns with clear layer boundaries
- **JWT Authentication**: Secure token-based authentication
- **PostgreSQL Database**: GORM for database operations
- **RESTful API**: Well-structured REST endpoints
- **Email Service**: SendGrid integration for email notifications
- **Configuration Management**: Environment-based configuration
- **Logging**: Structured logging throughout the application

## Getting Started

### Prerequisites

- Go 1.21 or higher
- PostgreSQL database
- SendGrid account (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PersonalPortfolio/backend
```

2. Copy the environment file:
```bash
cp .env.example .env
```

3. Update the `.env` file with your actual configuration values.

4. Install dependencies:
```bash
go mod download
```

5. Run the application:
```bash
go run cmd/api/main.go
```

### API Endpoints

#### Health Check
- `GET /health` - Health check endpoint
- `GET /` - API information

#### User Management (Authentication Required)
- `POST /api/v1/users` - Create a new user
- `GET /api/v1/users` - List all users (with pagination)
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Authentication

All user management endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Configuration

The application uses environment variables for configuration. See `.env.example` for all available options.

### Database Migrations

This project uses GORM AutoMigrate. The database schema is automatically created/updated on application startup.

## Development

### Running Tests

```bash
go test ./...
```

### Building

```bash
go build -o bin/api cmd/api/main.go
```

### Docker

You can also run the application using Docker:

```bash
docker build -t personal-portfolio-api .
docker run -p 8080:8080 --env-file .env personal-portfolio-api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.
