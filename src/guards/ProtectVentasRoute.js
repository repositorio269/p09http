import { Navigate } from "react-router-dom";

export default function ProtectVentasRoute(props) {

    if(props.usuario?.rol !== 'ventas') {
        return <Navigate to="/acceso-no-permitido" replace/>
    }

    return props.children;
}