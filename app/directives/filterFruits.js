app.directive('fruit', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/filterFruits.html',
        scope: {},
        controller: 'homeCtrl',
        controllerAs: 'vm',
        bindToController: {

        }
    }
});