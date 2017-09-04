
//var myApp = angular.module("matchesApp",["ngRoute"]);


myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/main",{
		templateUrl : "C:/Users/Ragul/Desktop/profile/level-4/level-4/views/main-view.html",
		controller : "MainController",
		controllerAs : "mainCtrl"
	})
	/* .when("/main",{
		templateUrl : "views/main-view.html",
		controller : "MainController",
		controllerAs : "mainCtrl"
	}) */
	.otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);