import React, { useState } from 'react'

const ChangeLastLetter = () => {

    const [inputUser, setInputUser] = useState()
    const [newSentence, setNewSentence] = useState()

    const changeLetter = ()=>{
        const copyArr = structuredClone(inputUser)
        const words = copyArr.split(" ")
        const change = words.map((oneWord)=>{

            const letterByLetter = oneWord.split("")
            const lastLetters = letterByLetter.at(-1).toUpperCase()
            letterByLetter[letterByLetter.length-1] = lastLetters
            return(
                letterByLetter.join("")
            )
        })
        return(
            setNewSentence(change.join(" "))
        )
    
    }
  return (
    <>
    {newSentence}
    <br/>
    <input placeholder='Escribe una frase' onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button onClick={()=>{changeLetter()}}>Cambia la última letra a mayúsculas</button>
    </>
  )
}

export default ChangeLastLetter