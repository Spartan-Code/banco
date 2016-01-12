
LoginController.$inject = ['$scope', '$log', 'loginService','$window'];

function LoginController($scope, $log, loginService,$window) {

    $scope.usuario={
        nickName:"",
        passwordEncrypt:""
    };
    

    $scope.acceder = function () {
        
            
            var response = loginService.acceder($scope.usuario);

            response.success(function (data, status, headers, config) {
                alert("Logueado");
                if(data.rol === "Trabajador"){
                    $window.location="../trabajadores/index.html#/";
                }else{
                    
                }
                if(data.rol=== "Cliente"){
                    $window.location="../clientes/index.html#/";
                }else{
                    
                }

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

