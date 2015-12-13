app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: "main.html",
            
        });
        $routeProvider.otherwise({
            redirectTo: "/main"
        });
    }]);


