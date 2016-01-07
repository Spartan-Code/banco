app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: "main.html",
            controller: "MainController",
            css: 'entidadbancaria/css/entidadbancaria-login.css'
            
        });
        $routeProvider.otherwise({
            redirectTo: "/main"
        });
    }]);


