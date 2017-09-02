

var myApp = angular.module("matchesApp", []);

myApp.controller("MainController", ["$scope","$http",function($scope,$http){

	

	$scope.title = "Stats for EPL";
	$scope.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	$scope.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
	$scope.name="";
	
  $scope.loadMatches = function(){
  	
 $scope.matches1 = [];	
	$scope.totalMatches = [];
  	 $scope.matches2= [];
	

    $http({
        method: 'GET',
        url:$scope.baseUrl1
      }).then(function successCallback(response) {
          // $scope callback will be called asynchronously
          // when the response is available
         	$scope.matches1.push(response.data);
         	// console.log($scope.matches1);
         	
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        });



      $http({
        method: 'GET',
        url: $scope.baseUrl2
      }).then(function successCallback(response) {
          // $scope callback will be called asynchronously
          // when the response is available
          $scope.matches2.push(response.data);
         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        });

     
      $scope.matches1.push($scope.matches2);
     console.log($scope.matches1);

   //  $scope.matches1.push($scope.matches1,$scope.matches2);
   
   // console.log($scope.matches1);


  };
   


}]);