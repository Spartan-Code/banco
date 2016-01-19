
function CuentaBancariaService($http, $q) {



    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/cuentabancaria"
        };

        return $http(config);
    };

    this.detail = function (idCuentaBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/cuentabancaria/" + idCuentaBancaria
        };

        return $http(config);
    };

     this.insertar = function (cuentaBancaria) {
        var config = {
            method: "POST",
            url: "/banco_api/api/cuentabancaria",
            data: cuentaBancaria
        };

        return $http(config);
    };

    
}

app.service("cuentaBancariaService", CuentaBancariaService);



