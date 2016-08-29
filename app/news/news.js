angular.module('app.news', ['services.crud',
        'ui.router',
        'ui.bootstrap',
        'ngDialog',
        'xeditable'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('news', {
            url: '/news',
            views: {
                "main": {
                    controller: 'newsCtrl',
                    templateUrl: 'app/news/news.tpl.html'
                }
            },
            data: {pageTitle: 'news'}
        })
    })

    .controller("newsCtrl", function newsCtrl($scope,crudService,ngDialog){

        $scope.parameterFilterValue=[""];

        //get announcements data
        crudService.getAnnouncements()
            .success(function(data){
                $scope.announcements=data;
            })
            .error(function(){
                console.log("error")
            })

        //PopUp dialog box
        $scope.openPopup = function (template) {
            var style = "ngdialog-theme-default";
            ngDialog.open({
                template: 'app/' + template,
                className: style,
                scope: $scope,
                showClose: true,
                closeByDocument: false,
                closeByEscape: true
            });
        };
    });