

UsuarioListController.$inject = ['$scope', '$log', 'usuarioService'];

function UsuarioListController($scope, $log, usuarioService) {


    var response = usuarioService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.usuarios = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
//                Mostrar mensaje de error interno de servidor
        }
        if (status === 400) {
                $scope.businessMessages = data;
            }
    });
    ;

    $scope.borrar = function (idUsuario) {
        var response = usuarioService.delete(idUsuario);

        response.success(function (data, status, headers, config) {
            $scope.usuario = data;
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
app.controller("UsuarioListController", UsuarioListController);


UsuarioDetailController.$inject = ['$scope', "$routeParams", '$log', 'usuarioService'];

function UsuarioDetailController($scope, $routeParams, $log, usuarioService) {

    $scope.control="detail";
    var response = usuarioService.detail($routeParams.idUsuario);

    response.success(function (data, status, headers, config) {
        $scope.usuario = data;        
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
        
        var response = usuarioService.modificar($scope.usuario);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.usuario = data;
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

app.controller("UsuarioDetailController", UsuarioDetailController);


UsuarioInsertController.$inject = ['$scope', '$log', '$http', 'usuarioService'];

function UsuarioInsertController($scope, $log, $http, usuarioService) {

    $scope.control="insertar";
   

    $scope.insertar = function () {

        
        var response = usuarioService.insertar($scope.usuario);

        response.success(function (data, status, headers, config) {
            $scope.businessMessages = [];
            $scope.usuario = data;
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


app.controller("UsuarioInsertController", UsuarioInsertController);

