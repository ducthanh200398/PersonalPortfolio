# Frontend Dockerfile
FROM node:20-alpine AS builder

WORKDIR /portfolio/frontend

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /portfolio/frontend
ENV NODE_ENV=production

# Copy built application
COPY --from=builder /portfolio/frontend/public ./public
COPY --from=builder /portfolio/frontend/.next/standalone ./
COPY --from=builder /portfolio/frontend/.next/static ./.next/static

# Set environment variable for API
ENV NEXT_PUBLIC_API_URL=http://localhost:8080

EXPOSE 3000

CMD ["node", "server.js"]
