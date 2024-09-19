// Create web server
// The web server should listen on port 3000
// When the server receives a request on route /comments, it should respond with the list of comments in the array

const http = require('http');

const comments = ["comment1", "comment2", "comment3", "comment4"];

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(comments.join('\n'));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});