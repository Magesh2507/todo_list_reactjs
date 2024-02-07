import React, {useState} from 'react'
import './ListItems.css'


const ListItems = ({todo, id, handleDelete, handleEdit, isEditing }) => {
    // const [isEditing, setIsEditing] = useState(false);
    // const [editValue, setEditValue] = useState(todo);
  
    // const handleEdit = () => {
    //   setIsEditing(true);
    // };
  
    // const handleSave = () => {
    //   onEdit(editValue);
    //   setIsEditing(false);
    // };

  return (
    <li key={id}>
    {todo}
    <button onClick={()=>handleDelete(id)} className='deletebutton'>Delete</button>
    <button onClick={()=>handleEdit(id)} className='editbutton'>Edit</button>
    </li>
  )
}

export default ListItems