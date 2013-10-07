angular.module('mean.bookmarks').controller('bookmarksController', ['$scope', '$routeParams', '$location', 'Global', 'bookmarks', function ($scope, $routeParams, $location, Global, bookmarks) {
    $scope.global = Global;

    $scope.create = function() {
        var bookmark = new bookmarks({
            title: this.title,
            content: this.content
        });
        bookmark.$save(function(response) {
            $location.path("bookmarks/" + response._id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(bookmark) {
        bookmark.$remove();  

        for (var i in $scope.bookmarks) {
            if ($scope.bookmarks[i] == bookmark) {
                $scope.bookmarks.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var bookmark = $scope.bookmark;
        if (!bookmark.updated) {
            bookmark.updated = [];
        }
        bookmark.updated.push(new Date().getTime());

        bookmark.$update(function() {
            $location.path('bookmarks/' + bookmark._id);
        });
    };

    $scope.find = function(query) {
        bookmarks.query(query, function(bookmarks) {
            $scope.bookmarks = bookmarks;
        });
    };

    $scope.findOne = function() {
        bookmarks.get({
            bookmarkId: $routeParams.bookmarkId
        }, function(bookmark) {
            $scope.bookmark = bookmark;
        });
    };
}]);