/**
 * Created by rbmtv on 9/14/15.
 */

app.factory('apiService', function ($http, clearvueConfig) {
    return {
        getService: function (query, url, callback) {

            var query_string = null;

            angular.forEach(query, function (value, key) {
                if (!query_string) {
                    query_string = key + '=' + value;
                } else {
                    query_string = query_string + '&' + key + '=' + value;
                }
            });

            var promise = $http.get(url + '?' + query_string, {
                headers: { 'Content-Type': 'application/json'}
            });

            promise.then(
                function (payload) {

                    var response = {status: payload.data.result.status, response: payload.data.result.response, message: payload.data.result.message};
                    callback(response);


                }, function (error) {

                    var response = {status: error.data.result.statuserror, response: error.data.result.response, message: error.data.result.message};
                    callback(response);

                });
        },
        postService: function (data, url, callback) {

            var promise = $http.post(clearvueConfig.apiUrl+url, data, {
                headers: { 'Content-Type': 'application/json'}
            });

            promise.then(
                function (payload) {

                    var response = {status: payload.data.result.status, response: payload.data.result.response, message: payload.data.result.message};
                    callback(response);


                }, function (error) {

                    var response = {status: error.data.result.statuserror, response: error.data.result.response, message: error.data.result.message};
                    callback(response);

                });

        },
        putService: function (data, url, callback) {

            var promise = $http.put(url, data, {
                headers: { 'Content-Type': 'application/json'}
            });

            promise.then(
                function (payload) {

                    var response = {status: payload.data.result.status, response: payload.data.result.response, message: payload.data.result.message};
                    callback(response);


                }, function (error) {

                    var response = {status: error.data.result.statuserror, response: error.data.result.response, message: error.data.result.message};
                    callback(response);

                });
        },
        deleteService: function (data, url, callback) {

            var promise = $http.delete(url, data, {
                headers: { 'Content-Type': 'application/json'}
            });

            promise.then(
                function (payload) {

                    var response = {status: payload.data.result.status, response: payload.data.result.response, message: payload.data.result.message};
                    callback(response);


                }, function (error) {

                    var response = {status: error.data.result.statuserror, response: error.data.result.response, message: error.data.result.message};
                    callback(response);

                });
        }
    };
});