

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/entidadbancaria/:idEntidadBancaria/sucursalbancaria/insert', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "SucursalBancariaInsertController"
        });

        $routeProvider.when('/entidadbancaria/:idEntidadBancaria/sucursalbancaria/detail/:idSucursalBancaria', {
            templateUrl: "sucursalbancaria/sucursalbancaria-detail.html",
            controller: "SucursalBancariaDetailController"
        });

    }]);


