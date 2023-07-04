
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for invoicing API
const apiRoutes = require("./routes/Allapi")

//mount the invoicing api
app.use("/api/v1", apiRoutes)

//start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect()

//default route
app.get("/", (req,res) => {
    res.send(`<h1> This is Homepage, and next page is backend</h1>`);
})

