import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInputs] = useState('');

    const inputRef = useRef(null);

    //on page load will auto click in box so user will just begin typing 
    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInputs(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            //creating a random id up to 10000 for each todo 
            id: Math.floor(Math.random() * 10000),
            text: input
        })
         setInputs("");
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
    )
}

export default TodoForm
