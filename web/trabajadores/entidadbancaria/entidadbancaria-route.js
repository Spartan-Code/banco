app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "entidadbancaria/entidadbancaria-list.html",
            controller: "EntidadBancariaListController",
        });

        $routeProvider.when('/entidadbancaria/detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "EntidadBancariaDetailController",
        });
        
        
        $routeProvider.when('/entidadbancaria/master-detail/:idEntidadBancaria', {
            templateUrl: "entidadbancaria/entidadbancaria-master-detail.html",
            controller: "EntidadBancariaMasterDetailController",
            css: 'entidadbancaria/css/entidadbancaria-master-detail.css'
        });
        
        $routeProvider.when('/entidadbancaria/insert', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "EntidadBancariaInsertController",
        });
    }]);


