const msal = require('@azure/msal-node');
const axios = require('axios');
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
const arr=[];

require('dotenv').config();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    console.log("구동");
    res.send("TEST");
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
