import React, { useEffect, useState } from "react";
import axios from 'axios'

function Card() {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        axios.post('http://localhost:3000/todos', {
            title: title,
            description: description
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }

    const getTodos = () => {
        fetch('http://localhost:3000/todos', {
            method: "GET",
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setTodos(data);
        })
    }

  return (
    <>
    <div className='w-1/3 h-1/2 bg-zinc-700 overflow-hidden ml-120 mt-10 rounded-3xl'>
    <div className="flex justify-center">
        <input type="text" placeholder="Title" className="bg-white p-3 px-15 rounded-md mt-20" id="ipOne"
            onChange={(e) => {
                setTitle(e.target.value)
            }}
        />
    </div>

    <div className="flex justify-center">
    <input type="text" placeholder="Description" className="bg-white p-3 px-15 rounded-md mt-10" id="ipTwo"
        onChange={(e) => {
            setDescription(e.target.value);
        }}
    />
    </div>

    <div className="flex justify-evenly">
    <div>
    <button className='bg-sky-400 px-3 py-2 mt-5 rounded-md text-xl' onClick={handleSubmit}>Add todo</button>
    </div>

    <div>
        <button className="bg-green-200 mt-5 rounded-md text-xl px-3 py-2" onClick={getTodos}>Get todo</button>
    </div>
    
    </div>
    
    
</div>

<div className="w-200 bg-zinc-300 ml-80 mt-5 h-55 rounded-4xl overflow-hidden">
   {
    todos.map((todo) => {
        return <div className="h-8 flex gap-5 pl-5 pt-3 text-sky-500 ">
            <div className="text-xl">
            <span className="text-black">Title: </span>{todo.title}
            </div>
            
            <div className="text-xl">
            <span className="text-black">Description: </span>{todo.description}
            </div>

            <div>
                <button className="h-8 bg-orange-300 text-black rounded-md" onClick={() => {
                    fetch('http://localhost:3000/todos/${_id}', {
                        method: "DELETE"
                    })
                }}>Mark as Done</button>
            </div>
        </div>
    })
   }
 </div>
</>
  )
}

export default Card;