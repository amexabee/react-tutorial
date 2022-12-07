/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        handleDeletProps={props.handleDeleteProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
