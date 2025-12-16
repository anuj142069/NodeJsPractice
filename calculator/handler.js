const {sumRequestHandler} = require('./sum');

const calRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Home Page</title>
        </head>
        <body>
        <h1>Welcome To Calculator Page</h1>
        <a href="/calculator" style="text-decoration: none; color: black; padding: 10px; font-family: Arial;">Visit to Calculator Page</a>
        </body>
      </html>
      `);
      return res.end();
  }else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
      <a href="/" style="text-decoration: none; color: black; padding: 10px; font-family: Arial;">Back To Home Page</a>
      <br /><br />
      <form action="/calculate-result" method="POST">
        <input type="text" name="num1" placeholder="Enter Num 1" />
        <br /><br />
        <input type="text" name="num2" placeholder="Enter Num 2" />
        <br /><br />
        <input type="submit" value="sum" />
      </form>
      </body>
      </html>
      `);
      return res.end();
  }else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
      <h1>404 Page Does not Exist</h1>
      <a href="/" style="text-decoration: none; color: black; padding: 10px; font-family: Arial;">Go to Home</a>
      </body>
    </html>
    `);
    return res.end();

}

exports.calRequestHandler = calRequestHandler;