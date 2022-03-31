import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import FormCliente from '../components/FormCliente';
import { getClienteBy_id, putCliente } from '../services/Clientes';

export default function EditarCliente() {

    const params = useParams();
    const [cliente, setCliente] = useState({
        nombre: '',
        actividades: '',
        direccion: '',
        localidad: ''
    });
    const [isEditionMode, setIsEditionMode] = useState(false);

    useEffect(() => {
        getClienteBy_id(params._id)
            .then(res => {
                const {nombre, actividades, direccion, localidad} = res.data.cliente;
                setCliente({nombre,actividades,direccion,localidad})
            })
    }, [params._id])

    const navigate = useNavigate();

    const handleOnChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        putCliente(params._id, cliente)
                .then(res => {
                    console.log(res.data.message);
                    navigate('/ventas/dashboard-clientes');
                })
                .catch(err => {
                    //...
                    console.log(err);
                })
    }

    const handleIsEditionMode = e => {
        e.preventDefault();
        setIsEditionMode(!isEditionMode);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-100">
                    <form onSubmit={handleOnSubmit}>
                        <FormCliente values={cliente}
                                     isEditionMode={isEditionMode}
                                     handleOnChange={handleOnChange}/>
                        <div className="row end">
                            {isEditionMode ?
                                    <>
                                        <button type="button" onClick={handleIsEditionMode}>Cancelar</button>
                                        <button type="submit">Guardar cambios</button>
                                    </>
                                :
                                    <>
                                        <Link to="/ventas/dashboard-clientes">
                                            <button type="button" className="outline">Cancelar</button>
                                        </Link>
                                        <button type="button" onClick={handleIsEditionMode}>Editar</button>
                                    </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
