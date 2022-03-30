import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClienteByCif } from '../services/Clientes';

export default function EditarCliente() {

    const params = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        setCliente(getClienteByCif(params.cif));
    }, [params.cif])

    return (
        <div className="container">
            <p>Nombre: {cliente.nombre}</p>
            <p>CIF: {cliente.cif}</p>
            <p>Localidad: {cliente.localidad}</p>
        </div>
    )
}
