CuentaBancariaListController.$inject = ['$scope', '$log', 'cuentaBancariaService', '$route'];

function CuentaBancariaListController($scope, $log, cuentaBancariaService, $route) {

    var response = cuentaBancariaService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.cuentasBancarias = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;

   

};
app.controller("CuentaBancariaListController", CuentaBancariaListController);


CuentaBancariaInsertController.$inject = ['$scope', '$log', '$http', 'cuentaBancariaService', 'usuarioService', 'sucursalBancariaService', '$location'];

function CuentaBancariaInsertController($scope, $log, $http, cuentaBancariaService, usuarioService, sucursalBancariaService, $location) {

            
    $scope.control = "insertar";
    
    var response = sucursalBancariaService.findAllCodigoSucursal();

    response.success(function (data, status, headers, config) {
        $scope.codigoSucursales = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;
    
    var response = usuarioService.findbyAllNif();

    response.success(function (data, status, headers, config) {
        $scope.nifs = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;


    $scope.insertar = function () {


        var response = cuentaBancariaService.insertar($scope.cuentaBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Cuenta Bancaria con numero de cuenta " + data.numeroCuenta + " ha sido insertada con exito.");
            $location.path('/cuentabancaria/list');
        }).error(function (data, status, headers, config) {
            if (status === 500) {
                alert("Error interno del servidor");
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };
}


app.controller("CuentaBancariaInsertController", CuentaBancariaInsertController);