/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module("frontEndMean", ['ngMaterial' ,
    'ui.router',
    'home',
    'home2',
    'clienteService',
    'agendaService'
    ]);

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "components/cliente/cliente.html",
            controller: "clienteController as controller"
        })
        .state('agenda', {
            url: "/agenda",
            templateUrl: "components/agenda/agenda.html",
            controller: "agendaController as controller"
        })
});