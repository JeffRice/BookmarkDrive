angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Bookmarks",
        "link": "bookmarks"
    }, {
        "title": "Personal Bookmarks",
        "link": "personal"
    }, {
        "title": "Create New Bookmark",
        "link": "bookmarks/create"
    }, {
        "title": "View My Bookmarks",
        "link": "bookmarks/mine"
    }];
}]);
