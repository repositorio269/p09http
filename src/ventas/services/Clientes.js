import axios from 'axios';

const clientesEndPoint = 'http://localhost:8080/clientes/';

export function getClientes() {
    return axios.get(clientesEndPoint);
}

export function searchClientes(term) {
    return axios.get(clientesEndPoint + 'search/' + term);
}

export function getClienteBy_id(_id) {
    return axios.get(clientesEndPoint + _id);
}

export function postCliente(cliente) {
    return axios.post(clientesEndPoint, cliente);
}

export function putCliente(_id, cliente) {
    return axios.put(clientesEndPoint + _id, cliente);
}