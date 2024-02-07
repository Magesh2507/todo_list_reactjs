
import './Input.css'

const Input = ({value, setValue, isEditing, submit, edit, editValue, setEditValue}) => {

    return (
        <div className='container'>
            <form className='form'>
                <h1>To do list</h1>
                <input className='input'
                    type='text'
                    placeholder='add tasks...'
                    value={isEditing?editValue : value}
                    onChange={(e) => {isEditing? setEditValue(e.target.value) : setValue(e.target.value)}}
                />
                {isEditing ? <input
                    className='submit' type='submit' onClick={edit} 
                /> :
                <input
                    className='submit' type='submit' onClick={submit} 
                />}
            </form>
        </div>
    )
}

export default Input