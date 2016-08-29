angular.module('app.users', [
        'services.crud',
        'ui.router',
        'ui.bootstrap',
        'xeditable'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('users', {
            url: '/users',
            views: {
                "main": {
                    controller: 'usersCtrl',
                    templateUrl: 'app/users/users.tpl.html'
                }
            },
            data: {pageTitle: 'users'}
        })
    })



    .controller("usersCtrl", function usersCtrl($scope,crudService){
        crudService.getAllUserData().then(function (response) {
            $scope.usersAll = response.data;
        });

        // save user
        $scope.saveUser = function(data, id) {
            //$scope.user not updated yet
            angular.extend(data, {id: id});
            return $http.post('/saveUser', data);
        };

        // remove user
        $scope.removeUser = function(index) {
            $scope.usersAll.splice(index, 1);
        };

        // add user
        $scope.addUser = function() {

            $scope.inserted = {
                id: $scope.usersAll.length+1,
                forename: '',
                surname: '',
                email: ''
            };

            $scope.usersAll.push($scope.inserted)

            crudService.newUser(JSON.stringify($scope.inserted))
        };

        // add user
        $scope.updateUser = function(id) {

            $scope.inserted = {
                id: $scope.usersAll[id],
                forename: $scope.usersAll.forename,
                surname: $scope.usersAll.surname,
                email: $scope.usersAll.email
            };

            crudService.updateUser(JSON.stringify($scope.inserted))
        }
    })