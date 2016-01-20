
EntidadBancariaListController.$inject = ['$scope', '$log', 'entidadBancariaService', '$route'];

function EntidadBancariaListController($scope, $log, entidadBancariaService, $route) {

    var response = entidadBancariaService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;

    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;

    $scope.borrar = function (idEntidadBancaria) {
        var answer = confirm("¿Estás seguro de borrar esta Entidad Bancaria?");
        if (answer) {
            var response = entidadBancariaService.delete(idEntidadBancaria);

            response.success(function (data, status, headers, config) {
                alert("Entidad Bancaria borrada con éxito");
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


}
;
app.controller("EntidadBancariaListController", EntidadBancariaListController);



EntidadBancariaDetailController.$inject = ['$scope', "$routeParams", '$log', 'sucursalBancariaService', 'entidadBancariaService', '$location', '$route'];

function EntidadBancariaDetailController($scope, $routeParams, $log, sucursalBancariaService, entidadBancariaService, $location, $route) {


    $scope.control = "detail";
    var response = entidadBancariaService.detail($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;

        var response = sucursalBancariaService.findByidEntidadBancaria(data.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.sucursalesBancarias = data;
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

    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
        opened: false
    };

    $scope.borrar = function (idSucursalBancaria) {
        var answer = confirm("¿Estás seguro de borrar esta Sucursal Bancaria?");
        if (answer) {
            var response = sucursalBancariaService.delete(idSucursalBancaria);

            response.success(function (data, status, headers, config) {
                alert("Sucursal Bancaria borrada con éxito");
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


    $scope.modificar = function () {

        var response = entidadBancariaService.modificar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Entidad Bancaria con CIF " + data.codigoEntidad + " ha sido actualizada con éxito.");
            $location.path('/entidadbancaria/list');
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
;

app.controller("EntidadBancariaDetailController", EntidadBancariaDetailController);


EntidadBancariaInsertController.$inject = ['$scope', '$log', '$http', 'entidadBancariaService', '$location'];

function EntidadBancariaInsertController($scope, $log, $http, entidadBancariaService, $location) {

    $scope.control = "insertar";
    var promise = entidadBancariaService.defaultValue();

    promise.then(function (response) {
        $scope.entidadBancaria = response.data;
    });

    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
        opened: false
    };

    $scope.insertar = function () {


        var response = entidadBancariaService.insertar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Entidad Bancaria con CIF " + data.codigoEntidad + " ha sido insertada con éxito.");
            $location.path('/entidadbancaria/list');
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


app.controller("EntidadBancariaInsertController", EntidadBancariaInsertController);



EntidadBancariaMasterDetailController.$inject = ['$scope', "$routeParams", '$log', 'entidadBancariaService', 'sucursalBancariaService', '$location'];

function EntidadBancariaMasterDetailController($scope, $routeParams, $log, entidadBancariaService, sucursalBancariaService, $location) {

    $scope.control = "detail";
    var response = entidadBancariaService.detail($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;



        var response = sucursalBancariaService.findByidEntidadBancaria(data.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.sucursalesBancarias = data;
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
}

app.controller("EntidadBancariaMasterDetailController", EntidadBancariaMasterDetailController);