import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import CrearCliente from './clientes/CrearCliente'
import DashboardClientes from './clientes/DashboardClientes'
import EditarCliente from './clientes/EditarCliente'

export default function InicioVentas() {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}> {/* "basepath" que en este caso equivale a "ventas"*/}
            <Route index element={<InicioVentasLayout />} />
            <Route path="dashboard-clientes" element={<DashboardClientes />}/>
            <Route path="editar-cliente/:cif" element={<EditarCliente />} />
            <Route path="crear-cliente" element={<CrearCliente />} />
            <Route path="*" element={<div className='container'><h1>404</h1></div>}/>
        </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
    return (
        <div className="container">
            <h1>Ventas</h1>
            {/* <Link to=dashboard-clientes">  podemos usar rutas relativas*/}
            <Link to="/ventas/dashboard-clientes"> {/* o absolutas*/}
                <button>Clientes</button>
            </Link>
        </div>
    )
}
