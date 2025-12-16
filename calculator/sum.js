const sumRequestHandler = (req, res) => {
  console.log("in sum request hanlder", req.url);
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', ()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <title>Calculate Result</title>
      </head>
      <body>
      <h1>Your Sum is ${result}</h1>
      <a href="/calculator" style="text-decoration: none; color: black; padding: 10px; font-family: Arial;">Go to Calculator</a>
      </body>
      </html>
      `);
      return res.end();
    });
}

exports.sumRequestHandler = sumRequestHandler;