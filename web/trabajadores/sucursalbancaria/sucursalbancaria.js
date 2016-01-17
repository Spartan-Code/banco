



SucursalBancariaInsertController.$inject = ['$scope', '$log', '$http','sucursalBancariaService', '$routeParams', '$location'];

function SucursalBancariaInsertController($scope, $log, $http,sucursalBancariaService, $routeParams, usuarioService, $location) {

    $scope.sucursalBancaria = {
               
        entidadBancaria: {
            idEntidadBancaria:$routeParams.idEntidadBancaria
            
        }
        
};


$scope.control = "insertar";


$scope.insertar = function () {

    $scope.sucursalBancaria.fechaCreacion = $scope.dt;
    var response = sucursalBancariaService.insertar($scope.sucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.businessMessages = [];
        alert("Sucursal Bancaria con Codigo Sucursal " + data.codigoSucursal + " ha sido insertado con exito.");
//        $location.path('/usuario/list');
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

