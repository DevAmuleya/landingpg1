# Stage 1: Build React App
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Create the directory before copying files
RUN mkdir -p /usr/share/nginx/html

# Copy built files from the builder stage
COPY --from=builder dist/index.html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
