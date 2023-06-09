import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    let imgCamionJaula="https://static.vecteezy.com/system/resources/previews/020/503/798/original/cage-truck-icon-vector.jpg"
  return (
    <div className="camion-jaula">
        <img src={imgCamionJaula} width="50px" height="50px" alt="Agregar al camión"/>
        <p>Agregar al camión jaula</p>
    </div>
  )
}

export default CartWidget