
EntidadBancariaListController.$inject = ['$scope', '$log', 'entidadBancariaService'];

function EntidadBancariaListController($scope, $log, entidadBancariaService) {


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
app.controller("EntidadBancariaListController", EntidadBancariaListController);


EntidadBancariaDetailController.$inject = ['$scope', "$routeParams", '$log', 'entidadBancariaService'];

function EntidadBancariaDetailController($scope, $routeParams, $log, entidadBancariaService) {

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

app.controller("EntidadBancariaDetailController", EntidadBancariaDetailController);


EntidadBancariaInsertController.$inject = ['$scope', '$log', '$http', 'entidadBancariaService'];

function EntidadBancariaInsertController($scope, $log, $http, entidadBancariaService) {

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


app.controller("EntidadBancariaInsertController", EntidadBancariaInsertController);


