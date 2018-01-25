var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

    $scope.getBooks = function () {
        $http.get('/api/books').then(function (res) {
            $scope.books = res.data;
        });
    }

    $scope.getBook = function () {
        var id = $routeParams.id;
        $http.get('/api/books/' + id).then(function (res) {
            $scope.book = res.data;
        });
    }

    $scope.addBook = function () {
        $http.post('/api/books', $scope.book).then(function (res) {
            window.location.href = '#!/books';
        });
    }

    $scope.fillGenres = function () {
        $http.get('/api/genres').then(function (res) {
            $scope.genres = res.data;
        });
    }

    $scope.updateBook = function () {
        var id = $routeParams.id;
        $http.put('/api/books/'+id, $scope.book).then(function (res) {
            window.location.href='#!/books/details/'+id;
        })
    }

    $scope.deleteBook = function() {
        var id = $routeParams.id;
        $http.delete('/api/books/'+id, $scope.book).then(function(res) {
            console.log('book'+ $routeParams.name + 'deleted')
            window.location.href='#!/';
        })
    }
}]);