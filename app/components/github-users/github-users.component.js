function HithubUsersController(myService){
    var vm = this;

    myService.getUsers().then(function(response){
        vm.gitusers = response.data;
    })
}
app.component('githubUsers', {
        templateUrl: 'components/github-users/github-users.html',
        controller: HithubUsersController,
        controllerAs: 'vm'
});