import React, { useState, useEffect } from 'react'

const ActualHour = () => {

    const [hour, setHour] = useState()

    useEffect(() => {
      const actionPerSecond = setInterval(
        ()=>{
            setHour(new Date().toLocaleString().split(",")[1])
        }, 1000)
        return ()=> clearInterval(actionPerSecond)
    }, [])
    


  return (
    <div>

        Actualmente son las:{hour}

    </div>
  )
}

export default ActualHour