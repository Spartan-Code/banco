function SucursalBancariaService($http, $q) {



    this.findAll = function () {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria"
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
    
    this.findByidEntidadBancaria = function (idEntidadBancaria) {
        var config = {
            method: "GET",
            url: "/banco_api/api/sucursalbancaria/?idEntidadBancaria="+idEntidadBancaria
        };

        return $http(config);
    };

    
    };



app.service("sucursalBancariaService", SucursalBancariaService);


