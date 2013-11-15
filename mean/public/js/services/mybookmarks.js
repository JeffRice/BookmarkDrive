//Bookmarks service used for bookmarks REST endpoint
angular.module('mean.mybookmarks').factory("Mybookmarks", ['$resource', function($resource) {
    return $resource('mybookmarks/:mybookmarkId', {
        bookmarkId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
