function UsuarioService($http, $q) {


    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/usuario"
        };

        return $http(config);
    };

    this.modificar = function (usuario) {
        var config = {
            method: "PUT",
            url: "/banco_api/api/usuario",
            data: usuario
        };

        return $http(config);
    };

    this.insertar = function (usuario) {
        var config = {
            method: "POST",
            url: "/banco_api/api/usuario",
            data: usuario
        };

        return $http(config);
    };


    this.findbyAllNif = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/usuario?nif=1"
        };

        return $http(config);
    };


    this.delete = function (idUsuario) {
        var config = {
            method: "DELETE",
            url: "/banco_api/api/usuario/" + idUsuario
        };

        return $http(config);
    };


    this.detail = function (idUsuario) {
        var config = {
            method: "GET",
            url: "/banco_api/api/usuario/" + idUsuario
        };

        return $http(config);
    };

    /*this.findByNombre = function (nombreUsuario) {
     var config = {
     method: "GET",
     url: "/banco_api/api/usuario/?nombre=" + nombreUsuario
     };
     
     return $http(config);
     };*/



}

app.service("usuarioService", UsuarioService);

