const express = require("express");
const router = express.Router();

//import controller

// const {createTodo} = require("..//controller/createTodo");
const {createApi} = require("../controller/createApi");
// const {getTodo, getTodoById} = require("../controller/getTodo")
const {getApi, getApiById} = require("../controller/getApi");
// const { getApiById } = require("../controller/getApi");
// const {updateTodo} = require("../controller/updateTodo");
const {updateApi} = require("../controller/updateApi")
// const {deleteTodo} = require("../controller/deleteTodo");
const {deleteApi} = require("../controller/deleteApi");
// const { default: mongoose } = require("mongoose");

//define api routes
// router.post("/createTodo", createTodo);
router.post("/createApi", createApi)

// router.get("/getTodos", getTodo);
// router.get("/getApi", getApi)

// router.get("/getTodos/:id", getTodoById);
router.get("/getApi/:id", getApiById)
// router.put("/updateTodo/:id", updateTodo);
router.put("/updateApi/:id", updateApi)

// router.delete("/deleteTodo/:id", deleteTodo);
router.delete("/deleteApi:id", deleteApi)

//export
module.exports =  router;


