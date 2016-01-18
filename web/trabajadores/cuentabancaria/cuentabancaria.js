CuentaBancariaListController.$inject = ['$scope', '$log', 'cuentaBancariaService', '$route'];

function CuentaBancariaListController($scope, $log, cuentaBancariaService, $route) {

    var response = cuentaBancariaService.findAll();

    response.success(function (data, status, headers, config) {
        $scope.cuentasBancarias = data;
    }).error(function (data, status, headers, config) {
        if (status === 500) {
            alert("Error interno del servidor");
        }
        if (status === 400) {
            $scope.businessMessages = data;
        }
    });
    ;

   

};
app.controller("CuentaBancariaListController", CuentaBancariaListController);


