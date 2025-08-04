// socket.js (Vercel Edge Function)
import { Server } from 'socket.io';

const io = new Server({ cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('message', msg => {
    io.emit('message', msg); // Broadcast to all clients
    // Optional: push to GitHub via REST API
  });
});

export default (req, res) => {
  res.socket.server.io = io;
  res.end();
};
