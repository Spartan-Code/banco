
LoginController.$inject = ['$scope', '$log', 'loginService', '$route'];

function LoginController($scope, $log, loginService, $route) {


    

    $scope.acceder = function () {
        
        
            var response = loginService.acceder($scope.usuario);

            response.success(function (data, status, headers, config) {
                alert("Logueado");
//                $route.reload();
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
app.controller("LoginController", LoginController);

