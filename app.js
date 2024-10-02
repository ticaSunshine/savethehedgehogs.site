const http = require('http');

http.createServer(function (req, res){

res.write("2024 Save the Hedgehogs!");
res.end();

}
).listen(3000);

console.log("Server started  on port 3000");
