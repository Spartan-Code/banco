function LoginService($http, $q) {


  

    this.acceder = function (usuario) {
        var config = {
            method: "POST",
            url: "/banco_api/api/login",
            data: usuario
        };

        return $http(config);
    };
    
    
    

}

app.service("loginService", LoginService);


