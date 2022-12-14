import React from 'react'
import { useState } from 'react'

const Content = () => {

    const [name, setName] = useState('Brian');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Brian','Kevin','Dave'];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
      }
      
    const handleClick = () => {
      console.log(count);
    } 

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`);
    } 

    
    const handleClick3 = (e) => {
      console.log(e.target.innerText);
    } 
    
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name} !
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick(count)}>Click it</button>
        <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content