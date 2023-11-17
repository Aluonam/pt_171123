import React, { useState } from 'react'

const ChangeLastLetter = () => {

    const [inputUser, setInputUser] = useState()

    const changeLetter = ()=>{
        const words = structuredClone(inputUser.split(" "))
        const change = words.map((oneWord)=>{

            const letterByLetter = oneWord.split("")
            const upperLetters = letterByLetter.at(-1).toUpperCase()
            letterByLetter[letterByLetter.length-1] = upperLetters
            return(
                letterByLetter.join("")
            )
        })
        console.log(change)
    
    }
  return (
    <>
    {inputUser}
    <br/>
    <input placeholder='Escribe una frase' onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button onClick={()=>{changeLetter()}}>Cambia la última letra a mayúsculas</button>
    </>
  )
}

export default ChangeLastLetter