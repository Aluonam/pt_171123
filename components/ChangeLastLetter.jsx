import React, { useState } from 'react'

const ChangeLastLetter = () => {

    const [inputUser, setInputUser] = useState()
  return (
    <>
    {inputUser}
    <br/>
    <input placeholder='Escribe una frase' onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button>Cambia la última letra a mayúsculas</button>
    </>
  )
}

export default ChangeLastLetter