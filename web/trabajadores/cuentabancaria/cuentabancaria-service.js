
function CuentaBancariaService($http, $q) {



    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/cuentabancaria"
        };

        return $http(config);
    };


}

app.service("cuentaBancariaService", CuentaBancariaService);



