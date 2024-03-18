import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const Todoappp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <TextField
        style={{ marginTop: 35 }}
        label="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        variant="outlined"
      />
      <Button
        style={{ marginTop: 35 }}
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
      >
        Add
      </Button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(index)}
                />
              }
              label={todo.text}
            />
            <Button
              style={{ backgroundColor: "red", padding: 10 }}
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todoappp;
