const express = require("express");
const data = require("./document.json");
console.log(data);
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const text = req.query.q;
  const document = data.filter((element) =>
    Object.values(element).some((value) => String(value).includes(text))
  );
  if (document.length === 0) {
    return res.json({
      data: [],
    });
  }
  res.json({
    data: document,
    message: "Successfully Searched Up",
  });
});

app.get("/search/:id", (req, res) => {
  const searchId = data.find((u) => u.id === parseInt(req.params.id));
  if (!searchId)
    res
      .status(404)
      .json(`did not find that Object with the given id ${req.params.id}`);
  res.json({
    data: searchId,
    message: "success",
  });
});

app.post("/search", (req, res) => {
  const list = req.body.fields;
  console.log(list);
  const listFoundItem = data.filter((item) => {
    return Object.keys(list).some((key) => {
      return item[key] === list[key];
    });
  });
  const searchkey = req.query.q;
  if (searchkey && list) {
    res
      .status(404)
      .json("can't request query parameter and body at the same time");
  } else {
    res.json(listFoundItem);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
