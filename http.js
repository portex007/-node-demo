const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("homepage");
    res.end();
  } else if (req.url === "/about") {
    res.write("aboutpage");
    res.end();
  }
  res.write("page not found");
  res.end();
});
server.listen(5000);
