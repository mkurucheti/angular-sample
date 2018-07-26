app.directive('fruit', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/filterFruits.html',
        scope: {},
        controller: 'homeCtrl',
        controllerAs: 'vm',
        bindToController: {

        }
    }
});