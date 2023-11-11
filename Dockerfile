# Use an official Ubuntu as a base image
FROM ubuntu:latest

# Install dependencies
RUN apt-get update -y && \
    apt-get install -y git

# Install Node.js and npm
RUN apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Check versions

# Set working directory
WORKDIR /app

# Copy application files
COPY . .

# Install npm dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Specify the command to run on container start
CMD ["npm", "start"]

