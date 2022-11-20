const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on
const bodyParser = require("body-parser");

let options = {
};

app.use(express.static("public", options));

app.get('/', (req, res) => {
	let html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link rel="stylesheet" href="outline&background.css">
    <title>Sean Orner Personal Profile</title>
  </head>
  <body>
  <div class="col">
	 <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Media Library
  </a>
</nav>
</div>
   <div class="container-fluid">
    <div class="row">
        <div class="col-md-8">	
      <div class="image">
        <img style='float:left;margin-right:10px;' img src="https://sornerbucket.s3.amazonaws.com/seanProfileImage.jpg" class="img-fluid" alt="Responsive Image" class="img-thumbnail" width="300" height="300">
		<div class="text">
	  <div class="header">
	  <h1>Sean Orner</h1>
	  </div>
	  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum Lorem Ipsum,
	  Lorem Ipsum Lorem Ipsum Lorem Ipsum. Lorem Ipsum!</p>
      </div>
	</div>
	
	</div>
	</div>
	</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  </body>
</html>`;
res.send(html);
});

app.use(bodyParser.json());
app.post("/add", function(req, res) {
	const { a, b } = req.body;
	res.send(`Adding your two numbers gets: ${a+b}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.