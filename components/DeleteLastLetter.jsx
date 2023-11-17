import React, { useState } from 'react'

const DeleteLastLetter = () => {

    const [inputUser, setInputUser] = useState()


    const deleteLetter = ()=>{
        const copySentence = inputUser.split("")
        const delLetter = copySentence.slice(0,-1)
        setInputUser(delLetter.join(""))
    }


  return (
    <>
    {inputUser}
    <br/>
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button onClick={()=>{deleteLetter()}}>Borra última letra</button>
    
    </>
  )
}

export default DeleteLastLetter