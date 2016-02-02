function MovimientoBancarioService($http, $q) {


    
    
    this.findByidCuentaBancaria = function (idCuentaBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/movimientobancario/?idCuentaBancaria="+idCuentaBancaria
        };

        return $http(config);
    };

    this.insertar = function (movimientoBancario) {
        var config = {
            method: "POST",
            url: "/banco_api/api/movimientobancario",
            data: movimientoBancario
        };

        return $http(config);
    };
    
    
    
    };



app.service("movimientoBancarioService", MovimientoBancarioService);

