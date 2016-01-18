app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: "login/login.html",
            controller: "LoginController",
            css: 'login/css/estilos-login.css'
        });
        $routeProvider.otherwise({
            redirectTo: "/login"
        });
    }]);


