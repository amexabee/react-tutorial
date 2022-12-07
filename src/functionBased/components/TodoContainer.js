import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    // const todos = this.state.todos.map((todo) => {
    //   if (todo.id === id) todo.completed = !todo.completed;

    //   return todo;
    // });
    // this.setState({ todos });
    setTodos((prevState) =>
      prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    ]);
  };

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          handleDeleteProps={handleDelete}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
