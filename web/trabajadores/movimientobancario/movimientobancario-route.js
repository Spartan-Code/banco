app.config(['$routeProvider', function ($routeProvider) {
        
        
        $routeProvider.when('/cuentabancaria/:idCuentaBancaria/movimientobancario/insert', {
            templateUrl: "movimientobancario/movimientobancario-detail.html",
            controller: "MovimientoBancarioInsertController",
            css: 'movimientobancario/css/movimientobancario-detail.css'
        });

        

    }]);


