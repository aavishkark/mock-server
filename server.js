const jsonServer = require("json-server");
var cors = require('cors')
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.use(cors)
server.listen(port);