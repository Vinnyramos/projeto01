/**
 * Created by vinic on 22/09/2016.
 */

/**
 * Created by vinic on 21/09/2016.
 */

var app = angular.module('home2', []);

    app.controller('agendaController', function($scope, $http, AgendaService) {
        $scope.listaTodosContatos = function () {
            AgendaService.listaCliente().then(function (response) {
                $scope.listaCliente = response;
            })

        }
    });

