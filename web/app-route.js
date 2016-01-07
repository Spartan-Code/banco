app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: "main.html",
            css: 'entidadbancaria/css/entidadbancaria-login.css'
            
        });
        $routeProvider.otherwise({
            redirectTo: "/main"
        });
    }]);


