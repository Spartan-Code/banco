

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/entidadbancaria/:idEntidadBancaria/sucursalbancaria/insert', {
            templateUrl: "sucursalbancaria/sucursalbancaria-insert.html",
            controller: "SucursalBancariaInsertController",
            css: 'sucursalbancaria/css/sucursalbancaria-insert.css'
        });

        
    }]);


