

app.service("myService", function($http){
    this.getUsers = function(){
        return $http.get("https://api.github.com/users?since=150");
    }
})