app.controller("homeCtrl", function(myService){
    var vm = this;
    this.message = "Welcome to the Angular demo!"
    this.fruits = ['banana', 'apple', 'orange']

    this.clickme = function(){
        alert('ng-click demo!');
    }
});