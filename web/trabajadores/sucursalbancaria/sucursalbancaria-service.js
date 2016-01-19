function SucursalBancariaService($http, $q) {

     this.detail = function (idSucursalBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria/" + idSucursalBancaria
        };

        return $http(config);
    };
    
    this.delete = function (idSucursalBancaria) {
        var config = {
            method: "DELETE",
            url: "/banco_api/api/sucursalbancaria/" + idSucursalBancaria
        };

        return $http(config);
    };

    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria"
        };

        return $http(config);
    };
    
    this.findAllCodigoSucursal = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria?codigoSucursal=1"
        };

        return $http(config);
    };
    
    this.insertar = function (sucursalBancaria) {
        var config = {
            method: "POST",
            url: "/banco_api/api/sucursalbancaria",
            data: sucursalBancaria
        };

        return $http(config);
    };
    
    this.modificar = function (sucursalBancaria) {
        var config = {
            method: "PUT",
            url: "/banco_api/api/sucursalbancaria",
            data: sucursalBancaria
        };

        return $http(config);
    };
    
    
    this.findByidEntidadBancaria = function (idEntidadBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria/?idEntidadBancaria="+idEntidadBancaria
        };

        return $http(config);
    };

    
    };



app.service("sucursalBancariaService", SucursalBancariaService);


