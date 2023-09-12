FROM node:18-alpine

USER root

RUN apk add --no-cache git
RUN apk add --no-cache python3 py3-pip make g++
RUN apk add --no-cache build-base cairo-dev pango-dev

RUN apk add --no-cache chromium

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app/
RUN npm install

# Copy server.js
COPY server.js /app/

# Set environment variables
ENV PORT=80

# Expose the specified port
EXPOSE ${PORT}

# Start the Express server
CMD ["npm", "start"]
