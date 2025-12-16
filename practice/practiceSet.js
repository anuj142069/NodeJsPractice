const http = require('http');
// const fs = require('fs');

// const PORT = 3002;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)

  if(req.url === '/home'){
    res.write('<h1>Welcome to Home Page</h1>');
    return res.end();
  }else if(req.url === '/men'){
    res.write('<h1>Welcome to Men Page</h1>');
    return res.end();
  }else if(req.url === '/women'){
    res.write('<h1>Welcome to Women Page</h1>');
    return res.end();
  }else if(req.url === '/kids'){
    res.write('<h1>Welcome to Kids Page</h1>');
    return res.end();
  }else if(req.url === '/cart'){
    res.write('<h1>Welcome to Cart Page</h1>');
    return res.end();
  }
  
  res.write(`
    <html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <div style="background-color: black; padding: 10px;">
        <a href="/home" style="text-decoration: none; color: white; padding: 10px; font-family: Arial;">Home</a>
        <a href="/men" style="text-decoration: none; color: white; padding: 10px; font-family: Arial;">Men</a>
        <a href="/women" style="text-decoration: none; color: white; padding: 10px; font-family: Arial;">Women</a>
        <a href="/kids" style="text-decoration: none; color: white; padding: 10px; font-family: Arial;">Kids</a>
        <a href="/cart" style="text-decoration: none; color: white; padding: 10px; font-family: Arial;">Cart</a>
      </div>
    </body>
    </html>
    `);
  res.end();
});



server.listen(3001, () => {
  console.log(`Server running on address http://localhost:3001`)
})