const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/todosDB').then(() => {
    console.log("connected")
}).catch(() => {
    console.log("connection error");
});

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("Todo", userSchema);

app.get('/todos', (req, res) => {
   const todos = userSchema.find();
   res.send(todos);
});

app.post('/', (req, res) => {
})

app.listen(port, () => {
    console.log('server is started');
});