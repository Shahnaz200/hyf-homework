const express = require("express");
const data = require("./document.json");
console.log(data);
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())


app.get('/', (req, res) => {
 res.send('This is a search engine')
})

app.get("/search", (req, res) => {
    const text = req.query.q
    const document = data.filter(element => Object.values(element).some(value => String(value).includes(text)));
  if(document.length === 0){ 
   return res.json({data: "Nothing searched up", message:'Search for something'})}
   res.json({
    data: document,
    message: "success",
  });
});


app.get("/search/:id", (req, res) => {
  const searchId = data.find(u => u.id === parseInt(req.params.id));
  if(!searchId) return res.json({data: null, message:'the document with the given id was not found'});
  res.json({
    data: searchId,
    message: "success",
  });
});


app.post("/search", (req, res) => {
const list = req.body.fields;
console.log(list);
const listFoundItem = data.filter((item) => {
        return Object.keys(list).some(key => {
            return item[key] === list[key]; 
        });
    });
    res.json(listFoundItem);
  });


app.listen(port, () => 
 console.log(`listening on port ${port}`
));
