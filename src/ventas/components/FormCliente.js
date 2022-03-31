import React from 'react'

export default function FormCliente(props) {
  return (
    <>
        <div className="row">
            <div className="col-100">
                <label>Nombre</label>
                <input type="text" 
                       name="nombre"
                       value={props.values.nombre}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Actividades</label>
                <input type="text" 
                       name="actividades"
                       value={props.values.actividades}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Dirección</label>
                <input type="text" 
                       name="direccion"
                       value={props.values.direccion}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
        <div className="row">
            <div className="col-100">
                <label>Localidad</label>
                <input type="text" 
                       name="localidad"
                       value={props.values.localidad}
                       onChange={props.handleOnChange}/>
            </div>
        </div>
    </>
  )
}
