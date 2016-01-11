

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "entidadbancaria/entidadbancaria-list.html",
            controller: "EntidadBancariaListController",
            css: 'entidadbancaria/css/entidadbancaria-list.css'
        });

        $routeProvider.when('/entidadbancaria/detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "EntidadBancariaDetailController",
            css: 'entidadbancaria/css/entidadbancaria-detail.css'
        });
        
        $routeProvider.when('/entidadbancaria/insert', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "EntidadBancariaInsertController",
            css: 'entidadbancaria/css/entidadbancaria-detail.css'
        });
    }]);


