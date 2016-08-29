var app = angular.module("bestApp",[
    'app.home',
    'app.users',
    'app.contact',
    'app.news',
    'app.uploadArea',
    'services.crud',
    'angular.filter',
    'ngAnimate',
    'ui.select',
    'ui.bootstrap',
    'ui.router',
    'ngMdIcons',
    'ngDialog',
    'xeditable',
    'ngFileUpload'])


    .config(function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })

    .run(function ($state, $rootScope) {
        $rootScope.$state = $state;         //define state for ng-if
    })

    .controller('AppCtrl', function AppCtrl($scope) {

    });