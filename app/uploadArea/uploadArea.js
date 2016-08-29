angular.module('app.uploadArea', [
        'services.crud',
        'ui.router',
        'ui.bootstrap',
        'xeditable',
        'ngFileUpload'
    ])

    .config(function config($stateProvider) {
        $stateProvider.state('uploadArea', {
            url: '/uploads',
            views: {
                "main": {
                    controller: 'uploadAreaCtrl',
                    templateUrl: 'app/uploadArea/uploadArea.tpl.html'
                }
            },
            data: {pageTitle: 'uploadArea'}
        })
    })

    //theme for the xEditable
    .run(function (editableOptions) {
        editableOptions.theme = 'bs3';
    })

    .controller("uploadAreaCtrl", function contactCtrl($scope,crudService,Upload){

        // --- standard text upload
        $scope.topicUpload = "Click here to update";
        $scope.dateUpload = "Click here to update";
        $scope.descriptionUpload = "Click here to update. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.";

        // --- for the file upload percent from file
        $scope.uploadpercent = 0;
        // --- for the file upload the current kb amount
        $scope.uploadcurrent = 0;
        // --- for the file upload the max kb amount
        $scope.uploadtotal = 0;


        // --- File upload to save attachments
        $scope.fileUpload = function(fileData) {
            var fdata = fileData;

            //define name
            if(fdata.name != undefined || fdata.name != null)
            {
                $scope.filename = fdata.name;
            }
            else
            {
                $scope.filename = "Name is not valid";
            }

            //define size
            $scope.filesize = fdata.size;

            //start upload
            if (fdata != undefined) {
                $scope.uploaddata = fdata;

                Upload.upload({
                    url: "exampleUrl",    //must be updated to function
                    headers: {
                        'Content-Type': "application/json;charset=UTF-8"
                    },
                    data: {'file': fdata}
                }).then(function (response) {
                    if (response.status > 0)
                        console.log(response.status + ': ' + response.data);
                });

                $scope.uploadpercent = 100;   //in the sample project set default.

            }
        }



    })