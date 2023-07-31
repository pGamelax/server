import express from "express";
import { createServer } from "http";
import Server from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname =path.dirname(__filename)
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

app.get('/', (req, res)=> {
res.sendFile(__dirname+ "/index.html")
})

httpServer.listen(3000, () => console.log("Running"));