const { Socket } = require("dgram");
const express=require("express");
const app=express();
const http=require("http");
const {Server}=require("socket.io")
const mainserver=http.createServer(app).listen(7002);

let count=0

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

const ws=new Server(mainserver);
ws.on("connection",(Socket)=>{
    count++
    console.log(count)


    Socket.on("abc",(e)=>{
        console.log(e)
    })

    Socket.on("disconnect",()=>{
        count--;
        console.log(count)
    })
})




