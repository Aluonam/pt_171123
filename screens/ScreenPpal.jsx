import React, { useState, useEffect } from 'react'

const ScreenPpal = () => {

    const [dataAPI, setDataAPI] = useState()

    const llamadaAPI = async () =>  {
        try{
            const llamada = await fetch('https://randomuser.me/api/')
            const data = await llamada.json()
            console.log("datos",data.results)
            setDataAPI(data.results)
        }
        catch(error){
            console.log("error detectado", error);
        }
    }

  return (
    <div>
        <button onClick={()=>{llamadaAPI()}}>Pulsa</button>
    </div>
  )
}

export default ScreenPpal