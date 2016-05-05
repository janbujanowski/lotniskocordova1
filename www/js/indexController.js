/**
 * Created by Jan on 2016-04-29.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('ContactController', ['$scope', function($scope) {
    $scope.contacts = ["hi@email.com", "hello@email.com"];

    $scope.add = function() {
        $scope.contacts.push($scope.contact);
        $scope.contact = "";
    }
}]);

