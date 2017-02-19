angular.module('services.crud', [])
    .factory('crudService', function ($http) {

        const api_url = "assets/data/";

        return {
            getAnnouncements: function()
            {
                return $http.get(api_url + 'announcements.json');
            },

            getStories: function()
            {
                return $http.get(api_url + 'stories.json');
            },

            getAllUserData: function() {
                return $http.get(api_url + 'userList.json');
            },

            //example request
            updateUser:function(user){
                return $http.put(api_url, user );               //update url
            },

            //example request
            newUser: function(user){
                return $http.post(api_url + user );              //update url
            }
        }
    });
