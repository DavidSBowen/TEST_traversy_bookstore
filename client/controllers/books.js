var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('BooksController loaded');
    $scope.getBooks = function(){
        $http.get('/api/books').then(function(res){
            $scope.books = res.data;
            console.log('data retrieved');
        });
    }
}])