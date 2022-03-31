import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { getClientes, searchClientes } from '../services/Clientes';

export default function DashboardClientes() {

  const [clientes, setClientes] = useState([]);
  const [values, setValues] = useState({
    term: ''
  })
  const [isLoading, setIsLoading] = useState(false);
  const {debounceValue} = useDebounce(values.term, 500);

  // useEffect(() => {
  //   getClientes()
  //     .then(resp => {
  //       //
  //       setClientes(resp.data.clientes);
  //     })
  //     .catch(err => {
  //       //
  //       console.log(err);
  //     })
    
  // }, [])

  const handleOnChange = e => {
    setValues({term: e.target.value})
  }

  useEffect(() => {
    if(debounceValue.length > 0) {
      setIsLoading(true);
      searchClientes(debounceValue)
        .then(resp => {
          setIsLoading(false);
          setClientes(resp.data.clientes);
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err); // Consumiríamos en un "toast" o similar
        })
    } else {
      setClientes([]);
    }
  }, [debounceValue])

  return (
    <div className='container'>
      <h1>Clientes</h1>
      <Link to="/ventas/crear-cliente">
        <button>Crear cliente</button>
      </Link>
      <div className="row">
        <form>
          <input type="search" 
                 value={values.term}
                 onChange={handleOnChange}/>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? 
              <tr><td style={{textAlign: 'center'}} colSpan={2}>Cargando...</td></tr> 
            :
              clientes.map(cliente => {
                return (
                  <>
                        <tr key={cliente._id}>
                          <td>{cliente.nombre}</td>
                          <td>
                            <Link to={`/ventas/editar-cliente/${cliente.cif}`}>
                              Visualizar
                            </Link>
                          </td>
                        </tr>
                  </>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}
