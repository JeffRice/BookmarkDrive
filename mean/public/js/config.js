//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/bookmarks', {
            templateUrl: 'views/bookmarks/list.html'
        }).
        when('/bookmarks/create', {
            templateUrl: 'views/bookmarks/create.html'
        }).
        when('/bookmarks/:bookmarkID/edit', {
            templateUrl: 'views/bookmarks/edit.html'
        }).
        when('/bookmarks/:bookmarkID', {
            templateUrl: 'views/bookmarks/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);