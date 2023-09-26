import React, { useState } from 'react';

function InputWriter() {

    const [userInput, setUserInput] = useState('');
    let content = '';

    const handleInput = (event) => {
        setUserInput(userInput + event.target.value);
    }

  return (
    <>
    <input type="text" value={content} placeholder='Type here' onChange={handleInput}/>
    <p>{userInput}</p>
    </>
  )
}

export default InputWriter;