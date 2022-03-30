import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import ProtectVentasRoute from "./guards/ProtectVentasRoute";
import AccesoNoPermitdo from "./pages/AccesoNoPermitdo";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

const InicioVentas = React.lazy(() => import('./ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./rrhh/InicioRRHH'));

function App() {

  const [usuario, setUsuario] = useState({nombre: 'Pilar López', rol: 'ventas'});
  const navigate = useNavigate();

  const handleLogin = () => {
    setUsuario({nombre: 'Pilar López', rol: 'ventas'});
    navigate('/');
  }
  
  const handleLogout = () => {
    setUsuario(null);
    navigate('/');
  }

  return (
    <>
      <HeaderMenu usuario={usuario}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ventas/*" element={
          <ProtectVentasRoute usuario={usuario}>
            <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
              <InicioVentas />
            </React.Suspense>
          </ProtectVentasRoute>
        } />
        <Route path="/recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
           <InicioRRHH />
          </React.Suspense>
        }/>
        <Route path="soporte" element={<Soporte />}/>
        <Route path="acceso-no-permitido" element={<AccesoNoPermitdo />} />
        {/* Como ruta default (por tanto la última) se usa * */}
        <Route path="*" element={
          <div className="container">  {/*Si el componente es muy sencillo se puede escribir directamente */}
            <p>Lo sentimos la página no existe</p>
            <Link to="/" ><button>Volver a inicio</button></Link>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
