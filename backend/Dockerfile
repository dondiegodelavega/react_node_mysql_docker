 # Create image based on the official Node 6 image from the dockerhub
FROM node:8.4.0

RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install
RUN npm install -g nodemon

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD npm run start