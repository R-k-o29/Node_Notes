const http = require("node:http");

const PORT = 5005;
const hostname = "localhost";

const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain"); //recommended : application/json
//   res.end(JSON.stringify({ name: "Rohit kumar" }));
  // res.end('Welcome to my server');

  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    res.write("<h1>Contact Page</h1>");
  }else{
    res.statusCode = 500;
    res.write("Error Loading page");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on hostname : ${hostname} : port : ${PORT} `);
});
