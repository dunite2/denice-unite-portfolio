# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx to serve the production build
FROM nginx:alpine

# Set the working directory as specified in requirements
WORKDIR /unite_denice_final_site

# Copy the build files from the previous stage to nginx html directory
COPY --from=build /app/build /unite_denice_final_site

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 5575 as required
EXPOSE 5575

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
