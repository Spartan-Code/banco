MovimientoBancarioInsertController.$inject = ['$scope', '$log', '$http', 'movimientoBancarioService', '$routeParams', '$location'];

function MovimientoBancarioInsertController($scope, $log, $http, movimientoBancarioService, $routeParams, $location) {


    $scope.tipos = [
        {
            value: "Haber",
            nombre: "Haber"
        },
        {
            value: "Debe",
            nombre: "Debe"
        }
    ];

    $scope.movimientoBancario = {
        cuentaBancaria: {
            idCuentaBancaria: $routeParams.idCuentaBancaria

        }

    };


    $scope.control = "insertar";


    $scope.insertar = function () {


        var response = movimientoBancarioService.insertar($scope.movimientoBancario);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            alert("Movimiento Bancario insertado con exito.");
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


app.controller("MovimientoBancarioInsertController", MovimientoBancarioInsertController);


