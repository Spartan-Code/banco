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
                    alert(data[0].message);
                }

            });
        } else {

        }
    };


   

};
app.controller("CuentaBancariaListController", CuentaBancariaListController);


CuentaBancariaInsertController.$inject = ['$scope', '$log', '$http', 'cuentaBancariaService', 'usuarioService', 'sucursalBancariaService', '$location'];

function CuentaBancariaInsertController($scope, $log, $http, cuentaBancariaService, usuarioService, sucursalBancariaService, $location) {

            
    $scope.control = "insertar";
    $scope.cuentaBancaria={
        saldo:0.00
    };
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
    
    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
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


CuentaBancariaDetailController.$inject = ['$scope', "$routeParams", '$log','cuentaBancariaService', 'usuarioService', 'sucursalBancariaService','movimientoBancarioService', '$location','$route'];

function CuentaBancariaDetailController($scope, $routeParams, $log,cuentaBancariaService, usuarioService, sucursalBancariaService,movimientoBancarioService, $location,$route) {





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
        
        
        var response = movimientoBancarioService.findByidCuentaBancaria(data.idCuentaBancaria);

        response.success(function (data, status, headers, config) {
            $scope.movimientosBancarios = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
                alert("Error interno del servidor");
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
                                
        
        
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;
    
    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
        opened: false
    };
   
}
;

app.controller("CuentaBancariaDetailController", CuentaBancariaDetailController);