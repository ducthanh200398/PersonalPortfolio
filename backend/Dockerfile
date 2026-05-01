# Backend Dockerfile
FROM golang:1.21-alpine AS builder

WORKDIR /portfolio/backend

# Copy go mod files
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main ./cmd/api

# Final stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /portfolio/backend

# Copy the binary from builder
COPY --from=builder /portfolio/backend/main .

# Copy data folder
COPY --from=builder /portfolio/backend/data ./data

EXPOSE 8080

CMD ["./main"]
