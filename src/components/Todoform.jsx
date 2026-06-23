import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { addTodo, updateTodo, editTodo, setEditTodo } =
    useContext(TodoContext);

  const [text, setText] = useState("");

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
        }
    }, [editTodo]);

    const handleSubmit = () => {
        if (!text.trim()) return;

        if (editTodo) {
            updateTodo(editTodo.id, text);
            setEditTodo(null);
        } else {    
        addTodo(text);
        }

        setText("");
    };

    return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editTodo ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TodoForm;