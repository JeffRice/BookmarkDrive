angular.module('mean.bookmarks').controller('PersonalController', ['$scope', '$routeParams', '$location', 'Global', 'Bookmarks', function ($scope, $routeParams, $location, Global, Bookmarks) {
    $scope.global = Global;

    Bookmarks.find({ title: 'Dino RIders' }, function (err, docs) {
  if (err) return handleErrorSomehow(err)
  console.log(Array.isArray(docs)) // true
  docs.forEach(function (doc) {
    console.log(typeof doc.save) // function
  })
})
        


}]);

