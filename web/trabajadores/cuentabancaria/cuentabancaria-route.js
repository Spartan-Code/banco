
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cuentabancaria/list', {
            templateUrl: "cuentabancaria/cuentabancaria-list.html",
            controller: "CuentaBancariaListController",
            css: 'cuentabancaria/css/cuentabancaria-list.css'
        });

        $routeProvider.when('/cuentabancaria/insert', {
            templateUrl: "cuentabancaria/cuentabancaria-detail.html",
            controller: "CuentaBancariaInsertController",
            css: 'cuentabancaria/css/cuentabancaria-detail.css'
        });
    }]);


