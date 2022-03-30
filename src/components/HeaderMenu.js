import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderMenu(props) {
  return (
    <nav>
        {props.usuario !== null ?
            <div>
                <button onClick={props.handleLogout}>Salir</button>
                &nbsp;{props.usuario.nombre}
            </div>
            :
            <button onClick={props.handleLogin}>Iniciar sesión</button>
        }
        <div> {/* En isActive el componente NavLink nos devuelve true si
                  el valor de to corresponde con la ruta actual*/}
            <NavLink to="/" className={({isActive}) => isActive ? 'activo' : ''}>
                Inicio
            </NavLink>
            {props.usuario?.rol === 'ventas' ?
                <NavLink to="/ventas" className={({isActive}) => isActive ? 'activo' : ''}>
                    Ventas
                </NavLink>
                : null
            }
            {props.usuario?.rol === 'rrhh' ?
                <NavLink to="/recursos-humanos" className={({isActive}) => isActive ? 'activo' : ''}>
                    Recursos Humanos
                </NavLink>
                : null
            }
            <NavLink to="/soporte" className={({isActive}) => isActive ? 'activo' : ''}>
                Ayuda
            </NavLink>
        </div>
    </nav>
  )
}
