const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Cloud Run CI/CD Demo</title>
<style>
body {
    background: linear-gradient(135deg, #4CAF50, #2196F3);
    font-family: Arial, sans-serif;
    text-align: center;
    color: white;
    margin-top: 100px;
}

h1 {
    color: yellow;
    font-size: 48px;
}

p {
    font-size: 24px;
}

button {
    background: orange;
    color: black;
    border: none;
    padding: 15px 30px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    background: red;
    color: white;
}
</style>
</head>

<body>
<h1>🚀 Good Night TEJU and MAYOOKHA REDDY</h1>

<p>sleep well</p>

<p>Created by Siva</p>

<button onclick="alert('Deployment Successful!')">
Click Me
</button>

</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
