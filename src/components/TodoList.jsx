import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchedFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchedSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchedFilter && matchedSearch
        })
    })

    console.log("Filtered Todo:", filteredTodos);
  return (
    <div>
        <ul>
            <li
            className='my-2 text-sm italic'>All your notes here...</li>
            {
                filteredTodos.map((todo, index)=> (
                    <TodoItem index={index} todo={todo} key={index}/>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList