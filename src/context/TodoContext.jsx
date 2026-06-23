import {createContext,useState} from "react";

export const TodoContext=createContext();

export const TodoProvider=({children})=>{
    const[todos,setTodos]=useState([]);
    const [editTodo,setEditTodo]=useState(null);

    const addTodo = (text)=>
    {
        const newtodo ={
        id:Date.now(),
        text
        };

        setTodos([...todos,newtodo]);
    };

    const getTodos = () =>{
        return todos;
    };

    const updateTodo=(id,newtext)=>{
        setTodos((prev)=>
        prev.map((todo)=>
        todo.id===id ? {...todo,text:newtext}:todo));
    };

    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                getTodos,
                editTodo,
                setEditTodo,
                updateTodo,
                deleteTodo
            }}>
                {children}
        </TodoContext.Provider>
    );
    

};