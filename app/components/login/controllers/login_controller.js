/**
 * Created by William Diaz on 9/11/15.
 */


app.controller('loginController', function ($scope, $rootScope, $http, $state) {

   $scope.showwrapper = false;

    $scope.login = {
        email: '',
        password: ''
    };

    $scope.doLogin = function () {


        /*
         :::  START API CALL
         */

        var requestData = {
            "username": $scope.login.email,
            "password": $scope.login.password
        };

        var url = "http://localhost:8088/api/webauth/authorize";
        var promise = $http.post(url, requestData, {
            headers: { 'Content-Type': 'application/json'}
        });

        promise.then(
            function (payload) {

                datafeed = payload.data.result.response;
                $scope.customers = datafeed;

                //Set global variable if user is logged
                $rootScope.logged = true;


                $state.go('home');


            }, function (error) {

                //Set global variable if user is logged
                $rootScope.logged = false;

                alert(error.data.result.message);

            });

    };


});



