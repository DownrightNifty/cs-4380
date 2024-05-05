FROM node:lts

WORKDIR /app
COPY package.json .
COPY package-lock.json .
# TODO: seperate frontend and backend dependencies
# install server's runtime dependencies
RUN npm install

# copy the server source code to the container
COPY . .

# run the server
EXPOSE 3000
CMD node server.js
