const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
server=app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
const io = require('socket.io')(server, { cors: true });

io.on("connection",socket=>{
    console.log("Nice to meet you. (shake hand)")
    socket.emit("Welcome",{message:"Welcom!"});
    
});