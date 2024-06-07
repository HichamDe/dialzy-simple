import express from "express";
const app = express();
const PORT = 5000;
// route
app.get("/",(req,res)=> res.send("Hello Welcome in Dialzy Azure"));

app.listen(PORT,console.log(`Running at port:${PORT}`));
