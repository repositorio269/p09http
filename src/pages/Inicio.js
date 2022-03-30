import React from 'react'
import { Link } from 'react-router-dom'
import { useFadeLoad } from '../hooks/useFadeLoad'

export default function Inicio() {



  return (
    <div className='container' ref={useFadeLoad()}>
        <h1>Bienvenid@ a nuestra aplicación</h1>
        <Link to="/soporte"> {/* to recibe ruta relativa o absoluta */}
            <button>Ayuda</button>
        </Link>
    </div>
  )
}
