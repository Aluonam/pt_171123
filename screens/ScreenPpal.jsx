import ActualHour from '@/components/ActualHour'
import ChangeLastLetter from '@/components/ChangeLastLetter'
import DeleteLastLetter from '@/components/DeleteLastLetter'
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
        <br/>
        <br/>
        <br/>
        <DeleteLastLetter></DeleteLastLetter>
        <br/>
        <br/>
        <br/>
        <ChangeLastLetter></ChangeLastLetter>
        <br/>
        <br/>
        <br/>
        <ActualHour></ActualHour>

    </div>
  )
}

export default ScreenPpal