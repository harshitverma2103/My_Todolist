/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex px-3">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 hover:bg-white hover:text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className='px-2'>
      <button type="submit" className="rounded-lg px-3 py-2 bg-green-600 text-white shrink-0  hover:animate-bounce ">
        Add
      </button>
      </div>
    </form>
  );
}

export default TodoForm;