const express = require("express");
const path = require("path");
const app = express();
const indexHTML = path.resolve(__dirname, "public/index.html");

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/*", (req,res)=>{
    res.sendFile(indexHTML);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err)=>{
    console.log(
        err ? err : "server started"
    );
})