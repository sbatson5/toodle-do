import React from 'react'
import Toggles from './Toggles'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="l-body">
    <header className="todo-header"></header>
    <Toggles />
    <VisibleTodoList />
    <footer className="todo-footer"></footer>
  </div>
)

export default App
