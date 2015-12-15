
ListController.$inject = ['$scope', '$log', 'entidadBancariaService'];

function ListController($scope, $log, entidadBancariaService) {


    var response = entidadBancariaService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
//                Mostrar mensaje de error interno de servidor
        }
        if (status === 400) {
                $scope.businessMessages = data;
            }
    });
    ;

    $scope.borrar = function (idEntidadBancaria) {
        var response = entidadBancariaService.delete(idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };


}
;
app.controller("ListController", ListController);


DetailController.$inject = ['$scope', "$routeParams", '$log', 'entidadBancariaService'];

function DetailController($scope, $routeParams, $log, entidadBancariaService) {

    $scope.control="detail";
    var response = entidadBancariaService.detail($routeParams.idEntidadBancaria);

    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
        $scope.dt=$scope.entidadBancaria.fechaCreacion;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
//                Mostrar mensaje de error interno de servidor
        }
        if (status === 400) {
                $scope.businessMessages = data;
            }
    });
    ;
    $scope.modificar = function () {
        $scope.entidadBancaria.fechaCreacion=$scope.dt;
        var response = entidadBancariaService.modificar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };
}
;

app.controller("DetailController", DetailController);


InsertController.$inject = ['$scope', '$log', '$http', 'entidadBancariaService'];

function InsertController($scope, $log, $http, entidadBancariaService) {

    $scope.control="insertar";
    var promise = entidadBancariaService.defaultValue();

    promise.then(function (response) {
        $scope.entidadBancaria = response.data;
        $scope.dt=$scope.entidadBancaria.fechaCreacion;
    });

    $scope.insertar = function () {

        $scope.entidadBancaria.fechaCreacion=$scope.dt;
        var response = entidadBancariaService.insertar($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            if (status === 500) {
//                Mostrar mensaje de error interno de servidor
            }
            if (status === 400) {
                $scope.businessMessages = data;
            }
        });
    };
}


app.controller("InsertController", InsertController);


