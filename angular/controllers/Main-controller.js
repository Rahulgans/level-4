//var myApp = angular.module('matchesApp',['ngRoute']);

myApp.controller("MainController",['$http',function($http){

  var main = this;

 
    	this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
    	this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"  
        
    // this.teams =[];
    
     this.totalMatches = [];
     this.rounds1 = [];
     this.rounds2 = [];

   
    
           this.loadFirst = function(){

                $http({
                 method: 'GET',
                 url:main.baseUrl1
                  }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                       main.rounds1 = response.data.rounds;
                      main.nameFirst = response.data.name;    
                      console.log(response.data.rounds[0].matches);   
                  //        console.log(main.rounds1);

                  }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                   // or server returns response with an error status.
                 alert("some error occurred. Check the console.");

                   })
                 };

                   console.log(main.rounds1);

                      this.loadFirst() // calling loadFirst method
                 
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

                  this.loadSecond() // calling LoadSecond method

                }]) // controller ends   

