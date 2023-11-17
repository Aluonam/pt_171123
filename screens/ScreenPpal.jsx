import ModalANT from '@/components/ModalANT'
import React, { useState, useEffect } from 'react'

const ScreenPpal = () => {

    const [dataAPI, setDataAPI] = useState([])


    useEffect(() => {
        llamadaAPI()
    }, [])
    
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

    

  return (
    <div>

        <ModalANT dataAPI={dataAPI[0]}></ModalANT>

    </div>
  )
}

export default ScreenPpal