
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/usuario/list', {
            templateUrl: "usuario/usuario-list.html",
            controller: "UsuarioListController"

        });

        $routeProvider.when('/usuario/detail/:idUsuario', {
            templateUrl: "usuario/usuario-detail.html",
            controller: "UsuarioDetailController",
            css: 'usuario/css/usuario-detail.css'
        });
        
        $routeProvider.when('/usuario/insert', {
            templateUrl: "usuario/usuario-detail.html",
            controller: "UsuarioInsertController",
            css: 'usuario/css/usuario-detail.css'
        });
    }]);


