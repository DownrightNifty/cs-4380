const app = require("./backend/app.js");
const debug = require("debug")("node-angular");
const http = require("http");


app.use('/api/posts',(req,res,next)=>{
  // Simulate a response for /api/posts endpoint
  const posts = [
    {
      id: "6546654",
      title:"Ratatouille",
      content:"This is the Ratatouille recipe"
    }
  ];

  // Send the posts as JSON response
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
console.log('server running at', port)
