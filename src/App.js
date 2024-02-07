import Input from './components/input/Input';
import List from './components/list/List';
import React, { useEffect, useState } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [index, setIndex] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    if (value) {
      const newTodos = [...todos, value];
      setTodos(newTodos)
      localStorage.setItem("todos", JSON.stringify(newTodos))
      setValue("")
    }
  }

  const edit = (e) => {
    e.preventDefault()
    if (editValue) {
      const updatedTodos = [...todos]
      updatedTodos[index] = editValue;
      setTodos(updatedTodos)
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
      setEditValue("")
      setIsEditing(false)
      setIndex(null)
    }
  }
  
  const handleEdit = (id) =>{
    setIsEditing(true)
    setEditValue(todos[id])
    setIndex(id)
  }

  useEffect(() => {
    const todo_list = localStorage.getItem("todos")
    if (todo_list) {
      setTodos(JSON.parse(todo_list))
    }
  }, [])

  const handleDelete = (index) => {
    console.log(index)
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <div className="App">
      <Input value={value} setValue={setValue} submit={submit} isEditing = {isEditing} edit={edit} editValue = {editValue} setEditValue = {setEditValue}/>
      <List todos={todos} handleDelete={handleDelete} handleEdit = {handleEdit} isEditing = {isEditing}/>
    </div>
  );
}

export default App;
