import { useState } from 'react'


function Todo() {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState('');
  const [editTodo, setEditTodo] = useState(''); // Unused in your current code

  const handleAdd = () => {
    if (addTodo === '') {
      return;
    }
    setTodos([...todos, addTodo]);
    setAddTodo(''); // Clear the input field
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((_, idx) => idx !== id));
  };

  const handleEdit = (id) => {
    const val = window.prompt('Enter Edited Value:', todos[id]);
    if (val === null) {
      // User clicked "Cancel"
      return;
    }
    if (val === '') {
      // User entered an empty string, which deletes the task
      handleDelete(id);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[id] = val;
      setTodos(updatedTodos);
    }
  };

  return (
    <>
      <div className="text-6xl font-bold text-center">Todo List</div>
      <div className="flex flex-col mx-14 space-y-2">
        <input
          className="outline outline-offset-2 outline-1 mt-4 p-4 text-lg rounded-lg"
          placeholder="Add Items..."
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="self-start px-5 py-3 bg-slate-950 text-slate-50 rounded-lg"
        >
          Add
        </button>
      </div>
      <div className="w-full mt-4">
        <ul>
          {todos.map((item, id) => (
            <li key={id} className="flex justify-between items-center p-4 bg-slate-200 font-bold">
              <span className="text-4xl">{item}</span>
              <div className="space-x-4">
                <button
                  onClick={() => handleDelete(id)}
                  className="px-4 py-2 bg-slate-950 text-slate-50 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(id)}
                  className="px-4 py-2 bg-slate-950 text-slate-50 rounded-lg"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
