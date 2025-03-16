const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todosDB').then(() => {
    console.log("mongo db connected ")
}).catch(() => {
    console.log("connection error");
});

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
});

const todo = mongoose.model("Todo", todoSchema);
module.exports = todo;