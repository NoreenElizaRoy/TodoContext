import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo, setEditTodo } = useContext(TodoContext);

  return (
    <li>
      {todo.text}

      <button onClick={() => setEditTodo(todo)}>
        Edit
      </button>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;