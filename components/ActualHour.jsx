import React, { useEffect, useState } from 'react'

const ActualHour = () => {

    const fullDate = new Date();

    const hour = fullDate.toLocaleString().split(" ")[1]

  return (
    <div>
        Actualmente son las: {hour}

    </div>
  )
}

export default ActualHour