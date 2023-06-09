import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  padding: 20px 32px;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <div>
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </TodoListBlock>
    </div>
  );
}

export default TodoList;
