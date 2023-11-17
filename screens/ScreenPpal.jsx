import React, { useState, useEffect } from 'react'

const ScreenPpal = () => {

    const [dataAPI, setDataAPI] = useState([])

    const llamadaAPI = async () =>  {
        try{
            const llamada = await fetch('https://randomuser.me/api/')
            const data = await llamada.json()
            console.log("datos API",data.results)
            setDataAPI(data.results)

        }
        catch(error){
            console.log("error detectado", error);
        }
    }

    const userData = dataAPI.map((element)=>{
        return(
            <>
            <h4>{element.name.first}</h4>
            </>
        )
    })

  return (
    <div>
        <button onClick={()=>{llamadaAPI()}}>Pulsa</button>

        {userData}
    </div>
  )
}

export default ScreenPpal