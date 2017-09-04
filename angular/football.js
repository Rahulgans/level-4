

var myApp = angular.module("matchesApp",["ngRoute"]);

myApp.controller("MainController", ["$http",function($http){

	

	this.title = "Stats for EPL";
	this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
	this.name;
  this.year;
	this.logo = "images/PL.jpg";
  console.log(this.baseUrl1);
	
    var main= this ;

      this.matches1 = [];  
     this.matches2 = [];
     this.totalMatches = [];
     }
]);
  

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

