
var myApp = angular.module("matchesApp",["ngRoute"]);


myApp.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/main-view",{
		templateUrl : "views/main-view.html",
		controller : "MainController",
		controllerAs : "mainCtrl"
	})
	.otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);