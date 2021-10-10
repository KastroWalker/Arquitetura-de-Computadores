const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let data = [
    {
      name: "Victor",
      email: "victorcsa2002@gmail.com",
    },
    {
      name: "Kauan",
      email: "kauanphbbb@gmail.com",
    },
  ];

  res.json(data);
});

app.listen(port, () => {
  console.log("Server is running");
});
