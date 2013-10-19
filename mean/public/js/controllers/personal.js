angular.module('mean.system').controller('IndexController', ['$scope', 'Bookmarks', 'Global', function ($scope, Global, Bookmarks) {
    $scope.global = Global;
}]);
