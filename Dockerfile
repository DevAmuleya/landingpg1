# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve the built app
RUN npm install -g serve

# Expose the port (default for serve)
EXPOSE 3000

# Command to run the app in production mode
CMD ["serve", "-s", "dist"]