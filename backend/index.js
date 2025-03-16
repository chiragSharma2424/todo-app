const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoModel = require('./db');
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

let todos = [];

// a get route where we can fetch our all todos;
app.get('/todos', (req, res) => {
    todoModel.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err);
    })
});

// post route to post a todo;
app.post('/todos', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    todoModel.create({
        title: title,
        description: description
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err);
    })
});

// app.delete("/todos/:id", (req, res) => {
//     const {id} = req.params;
//     todoModel.findByIdAndDelete({
//         _id: _id
//     }).then((result) => {
//         res.json(result)
//     }).catch((err) => {
//         console.log(err);
//     })
//   })

app.listen(port, () => {
    console.log(`server is started at port${port}`);
});
