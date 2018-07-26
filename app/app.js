var app = angular.module("app", []);
app.controller("homeCtrl", function(myService){
    var vm = this;
    this.message = "Welcome to the Angular demo!"
    this.fruits = ['banana', 'apple', 'orange']

    this.clickme = function(){
        alert('ng-click demo!');
    }

   
    myService.getUsers().then(function(response){
        vm.gitusers = response.data;
    })
   

});

app.filter("myfilter", function(){
    return function(input) {
        return input + "s";
    }
});

app.service("myService", function($http){
    this.getUsers = function(){
        return $http.get("https://api.github.com/users?since=150");
    }
})