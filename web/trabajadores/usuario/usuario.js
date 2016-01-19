

UsuarioListController.$inject = ['$scope', '$log', 'usuarioService', '$route'];

function UsuarioListController($scope, $log, usuarioService, $route) {


    var response = usuarioService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.usuarios = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;

    $scope.borrar = function (idUsuario) {
        var answer = confirm("¿Estas seguro de borrar este Usuario?");
        if (answer) {
            var response = usuarioService.delete(idUsuario);

            response.success(function (data, status, headers, config) {
                alert("Borrado con Exito");
                $route.reload();
            }).error(function (data, status, headers, config) {
                if (status === 500) {
                    alert("Error interno del servidor");
                }
                if (status === 400) {
                    $scope.businessMessages = data;
                }
            });
        } else {

        }
    };
}
;
app.controller("UsuarioListController", UsuarioListController);


UsuarioDetailController.$inject = ['$scope', "$routeParams", '$log', 'usuarioService', '$location'];

function UsuarioDetailController($scope, $routeParams, $log, usuarioService, $location) {

    $scope.roles = [
        {
            value: "Trabajador",
            nombre: "Trabajador"
        },
        {
            value: "Cliente",
            nombre: "Cliente"
        }
    ];

    

    $scope.control = "detail";
    var response = usuarioService.detail($routeParams.idUsuario);

    response.success(function (data, status, headers, config) {
        $scope.usuario = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
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
            alert("Usuario con NickName " + data.nickName + " ha sido actualizado con exito.");
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
;

app.controller("UsuarioDetailController", UsuarioDetailController);


UsuarioInsertController.$inject = ['$scope', '$log', '$http', 'usuarioService', '$location'];

function UsuarioInsertController($scope, $log, $http, usuarioService, $location) {


    $scope.roles = [
        {
            value: "Trabajador",
            nombre: "Trabajador"
        },
        {
            value: "Cliente",
            nombre: "Cliente"
        }
    ];


    $scope.usuario={};

    $scope.control = "insertar";


    $scope.insertar = function () {


        var response = usuarioService.insertar($scope.usuario);

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


app.controller("UsuarioInsertController", UsuarioInsertController);

