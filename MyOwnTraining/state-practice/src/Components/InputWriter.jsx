import React, { useState } from 'react'

function InputWriter() {

    const [userInput, setUserInput] = useState('');


    const handleInput = (event) => {
        setUserInput(event.target.value);
    }

  return (
    <>
    <input type="text" value={userInput} placeholder='Type here' onChange={handleInput}/>
    <p>{userInput}</p>
    </>
  )
}

export default InputWriter;