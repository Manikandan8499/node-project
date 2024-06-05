
import http from 'http';

const server = http.createServer( (req, res) =>{
    /* res.end("hello world boss , welcome to new environment"); */
    res.end(JSON.stringify({message: "hello world"}));
});

const port = 8000;

server.listen( port, ()=>{
    console.log("Server listing on", port);
})