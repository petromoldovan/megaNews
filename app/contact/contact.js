angular.module('app.contact', [
        'services.crud',
        'ui.router',
        'ui.bootstrap',
        'xeditable'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            views: {
                "main": {
                    controller: 'contactCtrl',
                    templateUrl: 'app/contact/contact.tpl.html'
                }
            },
            data: {pageTitle: 'contact'}
        })
    })

    .controller("contactCtrl", function contactCtrl($scope,crudService){

    })

   .directive("myWidget", function() {
        var linkFunction = function(scope, element, attributes) {
        var paragraph = element.children()[0];
            $(paragraph).on("click", function() {
                $(this).css({ "border": "1px solid #444" });
            });
        };
      return {
          restrict: "E",
          link: linkFunction
      };
    })

    .directive("returnTemplate", function() {
        var linkFunction=function(scope,elementm, attributes){
            scope.text=attributes["returnTemplate"]

        }

        return {
            restrict: "A",
            link: linkFunction,
            templateURL: "app/contact/directive.tpl.html"
        };
    });