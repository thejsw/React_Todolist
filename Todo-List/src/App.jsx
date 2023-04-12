import { useState } from 'react'
import './App.css'
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

function App() {

  return (
    <div className="App">
      <TodoTemplate></TodoTemplate>
    </div>
  )
}

export default App
