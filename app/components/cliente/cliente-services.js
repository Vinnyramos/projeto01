angular.module('clienteService', [])
    .service('clienteService', ClienteService);

function ClienteService($http) {
    return {
        adicionaCliente:adicionaCliente
    };

    function adicionaCliente(cliente) {
        return $http.post('http://localhost:8080/salvaCliente' , cliente).then(_tratarSucesso, _tratarErro)
    }

    function _tratarSucesso(response) {
        return response.data;
    }

    function _tratarErro(response) {
        //console.log(response);
    }
}
