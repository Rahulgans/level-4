

var myApp = angular.module('matchesApp',['ngRoute']);

myApp.controller("MainController", ['$http',function($http){

	

	this.title = "Stats for EPL";
	this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
	this.name;
  this.year;
	this.logo = "images/PL.jpg";
	
    var main= this ;
    
    this.nameFirst ;
    this.nameSecond ;
      this.matches1 = [];  
     this.matches2 = [];
    // this.teams =[];
     this.dates =[];
     this.totalMatches = [];
     this.rounds1 = [];
     this.rounds2 = [];
    this.days = [];
    
     this.loadFirst = function(){
 
      $http({
        method: 'GET',
        url:main.baseUrl1
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
         main.rounds1 = response.data.rounds;
           main.nameFirst = response.data.name;       
                  console.log(main.rounds1);
    
         
      
        // console.log(main.dates.length); */

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })

    
       //   console.log(main.dates);
     
      //console.log(main.matches1);
  };

 
  this.loadSecond = function(){

      
      $http({
        method: 'GET',
        url:main.baseUrl2
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
       main.nameSecond = response.data.name;
          main.rounds2 = response.data.rounds;


          
          
          
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })
     
      //console.log(main.matches1);
  };

     } // controller function ends

])  // controller ends




//  ROUTE Configuration 

myApp.config(["$routeProvider",function($routeProvider){
  $routeProvider
  .when("/main",{
    templateUrl : "views/main-view.html",
    controller : "MainController",
    controllerAs : "mainCtrl"
  })
  .otherwise(
            {
                redirectTo:'/'
                
            }
        );
}]);
  

 /*   this.loadMatches = function(){


      if (main.year == 2015){
        
      }
    main.getFirst = function(){

    	$http({
        method: 'GET',
        url:main.baseUrl1
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
         	main.matches1.push(response.data);
         	main.getSecond();
         	
         	//   console.log(this.matches1);
         	
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })
  };

    this.getSecond = function(){

     $http({
        method: 'GET',
        url: this.baseUrl2
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          this.matches2.push(response.data);
          this.matches1.push(this.matches2[0]);

          this.getTotal();

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })

    } 
   
    this.getTotal = function(){
		    
		 this.totalMatches = this.matches1;


    } 

    this.getFirst() ; 


  }; 
   
*/

