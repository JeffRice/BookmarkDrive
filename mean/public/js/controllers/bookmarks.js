angular.module('mean.bookmarks').controller('BookmarksController', ['$scope', '$routeParams', '$location', 'Global', 'Bookmarks', function ($scope, $routeParams, $location, Global, Bookmarks) {
    $scope.global = Global;

    $scope.create = function() {
        var bookmark = new Bookmarks({
            title: this.title,
         address: this.address,
         category: this.category,
            description: this.description
        });
        bookmark.$save(function(response) {
            $location.path("bookmarks/" + response._id);
        });

        this.title = "";
        this.description = "";
        this.address = "";
        this.category = "";
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
        Bookmarks.query({category : 'dinosaurs'}, function(bookmarks) {
            $scope.bookmarks = bookmarks;
        });
    };

    $scope.data = {message: "herro"};

    $scope.reversedMessage = function () {
	return $scope.data.message.split("").reverse().join("");}


    $scope.findNew = function(query) {
        Bookmarks.query({category : 'dinosaurs'}, function(dinobookmarks) {
            $scope.dinobookmarks = dinobookmarks;
        });
    };



   $scope.newList = function (value) {
      var blacklist = ['http://' + value.substr(7), 'https://' + value.substr(8), 'ftp://' + value.substr(6)];
      var httpPattern = value.substr(0, 7);
      var httpsPattern = value.substr(0, 8);
      var ftpPattern = value.substr(0, 6);

       
       if (httpPattern === 'http://') {
      return blacklist.indexOf(value) === 0;
    }


          else if (httpsPattern === 'https://'){
      return blacklist.indexOf(value) === 1; }


       else if (ftpPattern === 'ftp://'){
      return blacklist.indexOf(value) === 2; }

};

    $scope.findOne = function() {
        Bookmarks.get({
         bookmarkId: $routeParams.bookmarkId
        }, function(bookmark) {
         $scope.bookmark = bookmark;
        });
    };
}]);
