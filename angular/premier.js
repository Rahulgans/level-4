

var myApp = angular.module('matchesApp',['ngRoute']);

myApp.controller("MainController", ['$http',function($http){
 
  var main = this;

	this.title = "Stats for EPL";
	this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
	this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
	this.logo = "images/PL.jpg";   
    
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
          //        console.log(main.rounds1);

      
        // console.log(main.dates.length); 

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })
  };

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

      //    console.log(main.rounds1)          
        //  main.matchStats1(response);
          
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");

        })
     
       //console.log(main.matches1);
  };
  this.loadSecond() // calling LoadSecond method


}]) // controller ends   


myApp.controller("MatchController", ['$http','$routeParams',function($http,$routeParams){



var main = this ;


  this.matchId1 = $routeParams.matchid1 ;
  this.matchId2 = $routeParams.matchid2 ;
  this.matchDate = $routeParams.matchdate ;
    
    this.team1;
    this.team2;

    this.score1;
    
    this.score2;
    
    this.code1;
    
    this.code2;
    
    this.winner;
    this.date;
    this.day;
    this.rounds1 = [];

this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
  this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

  this.navigateBack = function (){
    window.history.back();
  }

  this.matchStats = function(data){
    console.log(data);
    main.rounds1 = data.rounds;
  //  console.log(main.rounds1);
//  console.log(main.matchId1);
 // console.log(main.matchId2);

      for (var i in main.rounds1){


         for (var j in main.rounds1[i].matches){

            if (i== main.matchId1 && j == main.matchId2 && main.rounds1[i].matches[j].date == main.matchDate){

          //    console.log("working");

              main.day = main.rounds1[main.matchId1].name;
                        
                        main.date = main.rounds1[main.matchId1].matches[main.matchId2].date;
                        main.team1 = main.rounds1[main.matchId1].matches[main.matchId2].team1.name;
                     //   console.log(main.team1);
                        main.team2 = main.rounds1[main.matchId1].matches[main.matchId2].team2.name;
                     //   console.log(main.team2);

                        main.score1 =main.rounds1[main.matchId1].matches[main.matchId2].score1;
                        main.score2 = main.rounds1[main.matchId1].matches[main.matchId2].score2;
                        main.code1 = main.rounds1[main.matchId1].matches[main.matchId2].team1.code;
                    //    console.log(main.code1);
                         main.code2 = main.rounds1[main.matchId1].matches[main.matchId2].team2.code;
                    //     console.log(main.code2);

                         if (main.score1 > main.score2){
                            main.winner = ""+main.team1+" won" ; 
                         }
                         else if (main.score1 < main.score2){
                          main.winner = ""+main.team2+" won" ;
                         }
                         else {
                          main.winner = "Match drawn" ;
                         } 
                       }
                     }
                     }
  } 

    this.loadYear1 = function(){

      $http({
        method:"GET",
        url:main.baseUrl1
      }).then(function successCallback(response){

        main.matchStats(response.data);
      }, function errorCallback(reason){
      alert("Error in GET");
      })
    }

    this.loadYear1() // Calls loadYear1 method

    this.loadYear2 = function(){

      $http({
        method:"GET",
        url:main.baseUrl2
      }).then(function successCallback(response){

        main.matchStats(response.data);
      }, function errorCallback(reason){
      alert("Error in GET");
      })
    }

     this.loadYear2();   // Calls loadYear2 method
   }


   ]); // controller ends



//  ROUTE Configuration 

myApp.config(["$routeProvider",function($routeProvider){
  $routeProvider
  .when("/main",{
    templateUrl : "views/main-view.html",
    controller : "MainController",
    controllerAs : "mainCtrl"
  })
 .when("/match/:matchid1/:matchid2/:matchdate",{
    templateUrl : "views/matchDetail-view.html",
    controller : "MatchController",
    controllerAs : "matchCtrl"
  }) 

  .otherwise(
            {
                redirectTo:'/'
                
            }
        );
}]);
  


