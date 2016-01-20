SucursalBancariaInsertController.$inject = ['$scope', '$log', '$http', 'sucursalBancariaService', '$routeParams', '$location'];

function SucursalBancariaInsertController($scope, $log, $http, sucursalBancariaService, $routeParams, $location) {

    $scope.sucursalBancaria = {
        entidadBancaria: {
            idEntidadBancaria: $routeParams.idEntidadBancaria

        }

    };

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popup1 = {
        opened: false
    };


    $scope.control = "insertar";


    $scope.insertar = function () {


        var response = sucursalBancariaService.insertar($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Sucursal Bancaria con Código de Sucursal " + data.codigoSucursal + " ha sido insertada con éxito.");
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


app.controller("SucursalBancariaInsertController", SucursalBancariaInsertController);


SucursalBancariaDetailController.$inject = ['$scope', "$routeParams", '$log', 'sucursalBancariaService', '$location'];

function SucursalBancariaDetailController($scope, $routeParams, $log, sucursalBancariaService, $location) {

    $scope.control = "detail";
    var response = sucursalBancariaService.detail($routeParams.idSucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.sucursalBancaria = data;

    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popup1 = {
        opened: false
    };

    $scope.modificar = function () {

        var response = sucursalBancariaService.modificar($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Sucursal Bancaria con Código de Sucursal " + data.codigoSucursal + " ha sido actualizada con éxito.");
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

app.controller("SucursalBancariaDetailController", SucursalBancariaDetailController);
