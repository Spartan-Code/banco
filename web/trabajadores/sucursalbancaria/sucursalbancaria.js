SucursalBancariaInsertController.$inject = ['$scope', '$log', '$http', 'sucursalBancariaService', '$routeParams', '$location'];

function SucursalBancariaInsertController($scope, $log, $http, sucursalBancariaService, $routeParams, $location) {

    $scope.sucursalBancaria = {
        fechaCreacion: new Date(),
        entidadBancaria: {
            idEntidadBancaria: $routeParams.idEntidadBancaria

        }

    };

    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
        opened: false
    };

    $scope.cancelar = '#/entidadbancaria/detail/' + $routeParams.idEntidadBancaria;

    $scope.control = "insertar";


    $scope.insertar = function () {


        var response = sucursalBancariaService.insertar($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Sucursal Bancaria con Código de Sucursal " + data.codigoSucursal + " ha sido insertada con éxito.");
            $location.path('/entidadbancaria/detail/' + $routeParams.idEntidadBancaria);
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
    $scope.cancelar = '#/entidadbancaria/detail/' + $routeParams.idEntidadBancaria;

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

    $scope.openDatePicker = function () {
        $scope.popupDatePicker.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popupDatePicker = {
        opened: false
    };

    $scope.modificar = function () {

        var response = sucursalBancariaService.modificar($scope.sucursalBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Sucursal Bancaria con Código de Sucursal " + data.codigoSucursal + " ha sido actualizada con éxito.");
            $location.path('/entidadbancaria/detail/' + $routeParams.idEntidadBancaria);
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