import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormCliente from '../components/FormCliente';
import { postCliente } from '../services/Clientes';

export default function CrearCliente() {

  const [values, setValues] = useState({
    nombre: '',
    actividades: '',
    direccion: '',
    localidad: ''
  })

  const navigate = useNavigate();

  const handleOnChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    postCliente(values)
          .then(res => {
            console.log(res.data.message);
            navigate('/ventas/dashboard-clientes');
          })
          .catch(err => {
            // manejaríamos el error
            console.log(err)
          })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-100">
          <h1>Crear cliente</h1>
          <form onSubmit={handleOnSubmit}>
            <FormCliente values={values}
                          isEditionMode={true}
                         handleOnChange={handleOnChange}/>
            <div className="row end">
              <Link to="/ventas/dashboard-clientes">
                <button type="button" className="outline">Cancelar</button>
              </Link>
              <button type="submit">Añadir</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
