# Bone Apple Teeth

This app has three major components:

1. Frontend Angular app (written in TypeScript, compiled to JS)
2. A simple HTTP server to serve the frontend to the browser
3. Backend to handle API calls and connect to MongoDB

It is a containerized app that is deployed using Docker. We use 3 containers/servers:

1. Simple frontend HTTP server (nginx)
2. Backend HTTP server (Node.js)
3. Proxy server to connect the two servers (nginx)

## Install Angular and other dependencies

```
npm install -g @angular/cli
npm install
```

## Development server

Run `ng serve`, then `nodemon backend/server.js` in a seperate terminal (so both servers can run simultaneously).

TODO: Fix database <-> frontend connection when no Docker proxy server is running and they're on different ports. For now, using Docker for development is recommended.

## Deploy with Docker

First, build the frontend:

```
ng build
```

You need to build the frontend on your local machine before you run `docker compose build`. The build process expects that a pre-built frontend app is already stored in `dist/`. The backend doesn't need to be built because it's written in vanilla JS and thus can be executed directly.

Then, build the containers:

```
docker compose build
```

Finally, run the containers:

```
docker compose up -d
```

You can use this command to do everything in one step:
```
ng build && docker compose build && docker compose up -d
```
