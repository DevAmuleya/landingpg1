# Stage 1: Build React App
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all source files
COPY . .

# Ensure the build folder exists
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Ensure directory exists before copying
RUN mkdir -p /usr/share/nginx/html

# Copy built React files from previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
