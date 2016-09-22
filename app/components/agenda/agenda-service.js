/**
 * Created by vinic on 21/09/2016.
 */
angular.module('agendaService', [])
    .service('AgendaService', AgendaService);

function AgendaService($http) {
    return {
        listaCliente:listaCliente
    };

    function listaCliente() {
        return $http.get('http://localhost:8080/Allclientes').then(_tratarSucesso, _tratarErro)
    }

    function _tratarSucesso(response) {
        return response.data;
    }

    function _tratarErro(response) {
        console.log(response);
    }
}
