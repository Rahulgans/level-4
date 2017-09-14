
// var myApp = angular.module('matchesApp',['ngRoute']);


myApp.controller("StatsController",["$http",function($http){

      var main = this;

      this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
      this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";

      this.rounds1 = [];
      this.totalMatches1 ={};
      this.totalMatches2={}; 
      this.code1;

          this.someFunc = function(response,data1){ 
           
           main.rounds1 = response.data.rounds; 

               //    console.log(data1)

                var matches = 0 ;  var wins= 0; var loss = 0; var drawn = 0;
                 var goalsFor = 0; var goalsAgainst= 0;

              for(var i in main.rounds1){

                for( var j in main.rounds1[i].matches){

                    if (main.rounds1[i].matches[j].team1.name == data1){
                      
                       main.code1 = main.rounds1[i].matches[j].team1.code;

                       matches++ ; 

                      goalsFor += main.rounds1[i].matches[j].score1 ;
                   
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

                       main.code1 = main.rounds1[i].matches[j].team2.code ;
                      
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

                    }      //else if ends

            
                  }
                    
              }        //FOR-IN ends 



                   if(response.data.name =="English Premier League 2015/16"){       
                       
                     //  console.log("working");

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

        }]) // controller ends