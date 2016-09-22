/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('home',[]);

app.controller("clienteController" , clienteController);

function clienteController($state, $mdSidenav, clienteService) {
    var self = this;


    // VARIAVEIS
    self.mensagem = "controlador da home";

    // FUNÇÕES
    self.vaiParaAgenda = vaiParaAgenda;
    self.abrirMenu     = abrirMenu;
    self.addCliente = addCliente;

    function addCliente() {
        var clienteTemp = {
            nome: angular.copy(self.cliente.nome),
            cpf: angular.copy(self.cliente.cpf)
        }
        clienteService.adicionaCliente(clienteTemp).then(function (response) {
        })
    }
    function vaiParaAgenda () {
        $state.go('agenda')
        ;
    }
    // function vaiParaHome(){
    //     $state.go('home')
    //     ;
    // }
    function abrirMenu(){
        $mdSidenav('left').toggle();
    }
}