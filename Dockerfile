# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (for better caching)
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the entire source code
COPY . . 

# Run the React build process
RUN npm run build || { echo "Build failed"; exit 1; }

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Ensure the build folder exists before copying
RUN mkdir -p /usr/share/nginx/html

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
