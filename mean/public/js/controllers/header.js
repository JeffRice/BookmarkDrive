angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Bookmarks",
        "link": "bookmarks"
    }, {
        "title": "Create New Bookmark",
        "link": "bookmarks/create"
    }];
}]);
