

var myApp = angular.module('matchesApp',['ngRoute']);

myApp.controller("MainController",['$http',function($http){
 
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
                    
                  }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert("some error occurred. Check the console.");

                  })
               
                 //console.log(main.matches1);
            };
            this.loadSecond() // calling LoadSecond method

          }]) // controller ends   



// Match Controller starts
  
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

    //  console.log(main.matchId1);
     // console.log(main.matchId2);

      for (var i in main.rounds1){


         for (var j in main.rounds1[i].matches){

          // looping based on routeParams ID 

            if (i== main.matchId1 && j == main.matchId2 && main.rounds1[i].matches[j].date == main.matchDate){

          //    console.log("working");

              main.day = main.rounds1[main.matchId1].name;
                        
                        main.date = main.rounds1[main.matchId1].matches[main.matchId2].date;
                        main.team1 = main.rounds1[main.matchId1].matches[main.matchId2].team1.name;
                     
                        main.team2 = main.rounds1[main.matchId1].matches[main.matchId2].team2.name;
                     

                        main.score1 =main.rounds1[main.matchId1].matches[main.matchId2].score1;
                        main.score2 = main.rounds1[main.matchId1].matches[main.matchId2].score2;
                        main.code1 = main.rounds1[main.matchId1].matches[main.matchId2].team1.code;
                    //    console.log(main.code1);
                         main.code2 = main.rounds1[main.matchId1].matches[main.matchId2].team2.code;
                   

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



    myApp.controller("StatsController",["$http",function($http){

      var main = this;

      this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
      this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

this.rounds1 = [];
this.rounds2 = [];
this.totalMatches1 ={};
this.totalMatches2={}; 
/*this.matches;
this.goalsFor;
this.goalsAgainst;
this.loss;
this.wins;
this.drawn; */
 this.someFunc = function(response,data1){ 
           
           main.rounds1 = response.data.rounds; 

 //    console.log(data1)
//  console.log(main.rounds1);
    var matches = 0 ;  var wins= 0; var loss = 0; var drawn = 0;
     var goalsFor = 0; var goalsAgainst= 0;

              for(var i in main.rounds1){

                for( var j in main.rounds1[i].matches){

                    if (main.rounds1[i].matches[j].team1.name == data1){
                      
                       matches++ ; 
                      goalsFor += main.rounds1[i].matches[j].score1 ;
                   //   console.log(goalsFor);
                      goalsAgainst += main.rounds1[i].matches[j].score2;
                    
                      if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        wins ++ ; 
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        loss ++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn ++;
                      }
                    } // If !
                    
                    
                    else if(main.rounds1[i].matches[j].team2.name == data1){

                        matches++ ;
                       goalsFor += main.rounds1[i].matches[j].score2 ;
                       goalsAgainst += main.rounds1[i].matches[j].score1 ;
                      
                       if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        loss++ ; 
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        wins++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn++;
                      }
                    } //else if !

            
                     }
                    
                    } //FOR-IN ends 


                console.log("Matches : "+matches);
               // console.log("Goals : "+goals);
                 console.log("Wins : "+wins);
                console.log("Drawn : "+drawn);
                 console.log("Loss : "+loss);
       if(response.data.name =="English Premier League 2015/16"){       
           
           console.log("working");
      main.totalMatches1.matcheS = matches;
       main.totalMatches1.goalsFor = goalsFor;
      main.totalMatches1.goalsAgainst = goalsAgainst;
      main.totalMatches1.loss = loss;
       main.totalMatches1.wins = wins;
      main.totalMatches1.drawn = drawn;

          }
        else if(response.data.name =="English Premier League 2016/17"){

          main.totalMatches2.matches = matches;
       main.totalMatches2.goalsFor = goalsFor;
      main.totalMatches2.goalsAgainst = goalsAgainst;
      main.totalMatches2.loss = loss;
       main.totalMatches2.wins = wins;
      main.totalMatches2.drawn = drawn;

    }
    console.log(main.totalMatches2);
        };


       this.statsCheck1 = function(data1){ 


          $http({
                method:"GET",
                url: main.baseUrl1
          }).then(function successCallback(response){
              
           console.log(data1);
            main.someFunc(response,data1);
          }, function errorCallback(reason){   
            alert("Error in GET");
              })
            };            


             this.statsCheck2 = function(data1){ 


          $http({
                method:"GET",
                url: main.baseUrl2
          }).then(function successCallback(response){
              
            console.log(data1);
            main.someFunc(response,data1);
          }, function errorCallback(reason){   
            alert("Error in GET");
              })
            } ;                               
        //   main.rounds1 = response.data.rounds;
                  
        //   main.rounds1 = response.data.rounds;

     



    }]) // controller ends



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
           .when("/teams",{
              templateUrl : "views/stats-view.html",
              controller : "StatsController",
              controllerAs : "statsCtrl"
           })

            .otherwise(
                      {
                          redirectTo:'/'
                          
                      }
                  );
          }]);
            


