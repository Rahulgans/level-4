
// var myApp = angular.module("matchesApp",["ngRoute"]);

myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/main",{
		templateUrl : "views/main-view.html",
		controller : "mainController",
		controllerAs : "mainCtrl"
	})
	.otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);