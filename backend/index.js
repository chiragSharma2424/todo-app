import express from 'express'
import cors from 'cors'
import todo from './db.js';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

let todos = [];

// a get route where we can fetch our all todos;
app.get('/todos', (req, res) => {
    todo.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err);
    })
});

// post route to post a todo;
app.post('/todos', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    todo.create({
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
