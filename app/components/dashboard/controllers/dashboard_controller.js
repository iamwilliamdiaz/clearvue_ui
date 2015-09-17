/**
 * Created by William Diaz on 9/11/15.
 */

app.controller('dashboardController', function ($scope) {


    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
    $scope.data = [300, 500, 100, 40, 120];

    $scope.labels_bar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data_bar = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];


    $scope.labels_line = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series_line = ['Series A', 'Series B'];
    $scope.data_line = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };


});



