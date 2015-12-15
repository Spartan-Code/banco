

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "entidadbancaria/entidadbancaria-list.html",
            controller: "ListController",
            css: 'entidadbancaria/css/entidadbancaria-list.css'
        });

        $routeProvider.when('/entidadbancaria/detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "DetailController",
            css: 'entidadbancaria/css/entidadbancaria-detail.css'
        });
        
        $routeProvider.when('/entidadbancaria/insert', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "InsertController",
            css: 'entidadbancaria/css/entidadbancaria-detail.css'
        });
    }]);


