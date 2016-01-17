



SucursalBancariaInsertController.$inject = ['$scope', '$log', '$http', '$routeParams', '$location'];

function SucursalBancariaInsertController($scope, $log, $http, $routeParams, usuarioService, $location) {

    $scope.sucursalBancaria = {
               
        entidadBancaria: {
            idEntidadBacnaria:$routeParams.idEntidadBancaria
            
        }
        
};


$scope.control = "insertar";


$scope.insertar = function () {

    $scope.sucursalBancaria.fechaCreacion = $scope.dt;
    var response = usuarioService.insertar($scope.sucursalBancaria);

    response.success(function (data, status, headers, config) {
        $scope.businessMessages = [];
        alert("Usuario con NickName " + data.nickName + " ha sido insertado con exito.");
        $location.path('/usuario/list');
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

