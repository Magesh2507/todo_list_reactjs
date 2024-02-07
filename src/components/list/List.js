import React from 'react'
import ListItems from '../listItems/ListItems'



const list = ({todos, handleDelete, handleEdit}) => {


  return (
    <div className='list_container'>
        <ul>
          { todos.map((todo, index) =><ListItems key={index} id={index} todo={todo} handleDelete={handleDelete} handleEdit = {handleEdit}/>)}
        </ul>
    </div>
  )
}

export default list