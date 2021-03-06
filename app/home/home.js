angular.module('app.home', [
        'services.crud',
        'ui.router',
        'ui.bootstrap',
        'ngDialog',
        'xeditable'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'homeCtrl',
                    templateUrl: 'app/home/home.tpl.html'
                }
            },
            data: {pageTitle: 'home'}
        })
    })


    .controller("homeCtrl", function homeCtrl($scope,crudService,ngDialog){
        $scope.announcements = [];
        $scope.stories = [];

        //get announcements data
        crudService.getAnnouncements().success(function(data){
                $scope.announcements=data;
            })
            .error(function(){
                console.log("error")
            });

        //get stories data
        crudService.getStories().success(function(resp){
                $scope.stories=resp;
            })
            .error(function(){
                console.log("error")
            })

        $scope.concatAll = function(arr) {
            var res = '';
            for (var i in arr) {
                res += " " + arr[i];
            }

            return res.trim();
        }

        //PopUp dialog box
        $scope.openPopup = function (template, classP) {
            var style = "ngdialog-theme-default";
            ngDialog.open({
                template: 'app/' + template,
                className: style +" "+classP,
                scope: $scope,
                showClose: true,
                closeByDocument: true,
                closeByEscape: true
            });
        };

        $scope.$on('$viewContentLoaded', function() {
            $scope.openPopup("home/startingPopup.tpl.html", "startingPop")
        });



    });