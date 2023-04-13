import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
  }
  .day {
    margin-top: 10px;
    font-size: 20px;
    color: #868e96;
  }
  padding: 48px 32px;
  border-bottom: 1px solid #e9ecef;
  text-align: left;
  `;
  
  const TasksLeft = styled.div`
  margin-top: 40px;
  font-size: 24px;
  font-weight: bold;
  color: #20c997;
`;

function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <div>
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
    </TodoHeadBlock>
    </div>
  );
}

export default TodoHead;
