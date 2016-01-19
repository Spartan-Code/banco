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

    $scope.borrar = function (idCuentaBancaria) {
        var answer = confirm("¿Estas seguro de borrar esta cuenta bancaria?");
        if (answer) {
            var response = cuentaBancariaService.delete(idCuentaBancaria);

            response.success(function (data, status, headers, config) {
                alert("Borrado con Exito");
                $route.reload();
            }).error(function (data, status, headers, config) {
                if (status === 500) {
                    alert("Error interno del servidor");
                }
                if (status === 400) {
                    $scope.businessMessages = data;
                }

            });
        } else {

        }
    };




}
;
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

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popup1 = {
        opened: false
    };
    
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


CuentaBancariaDetailController.$inject = ['$scope', "$routeParams", '$log', 'cuentaBancariaService', 'usuarioService', 'sucursalBancariaService', '$location', '$route'];

function CuentaBancariaDetailController($scope, $routeParams, $log, cuentaBancariaService, usuarioService, sucursalBancariaService, $location, $route) {





    $scope.control = "detail";

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


    var response = cuentaBancariaService.detail($routeParams.idCuentaBancaria);


    response.success(function (data, status, headers, config) {
        $scope.cuentaBancaria = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popup1 = {
        opened: false
    };

}
;

app.controller("CuentaBancariaDetailController", CuentaBancariaDetailController);