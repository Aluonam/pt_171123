import React, { useState } from 'react'

const DeleteLastLetter = () => {


    const [inputUser, setInputUser] = useState()

  return (
    <>
    <input onChange={(e)=>{setInputUser(e.target.value)}}></input>
    <button onClick={()=>{}}>Borra última letra</button>
    {inputUser}
    </>
  )
}

export default DeleteLastLetter