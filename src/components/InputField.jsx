import React from 'react'

const InputField = ({text, handleInput, HandleSubmit}) => {
  return (
    <div>
        <label htmlFor="">
            <input value={text} onChange={e => handleInput(e.target.value)}/>
            <button onClick={HandleSubmit}>Add Todo</button>
        </label>
    </div>
  )
}

export default InputField