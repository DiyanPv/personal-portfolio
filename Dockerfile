# Use official Node.js image
FROM node:18-alpine

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install deps
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js uses by default
EXPOSE 3000

# Start Next.js app
CMD ["npm", "start"]
