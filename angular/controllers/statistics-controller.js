myApp.controller("StatsController",["$http",function($http){

      var main = this;


      this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
      this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";



      this.rounds1 = [];
      this.totalMatches1 ={};
      this.totalMatches2={}; 
      this.code1;
      this.value1 = false;
      this.value2 = false ;

          this.teamStats = function(response,data1){ 
           
           main.rounds1 = response.data.rounds; 

               //    console.log(data1)

                var matches = 0 ;  var wins= 0; var loss = 0; var drawn = 0;
                 var goalsFor = 0; var goalsAgainst= 0;  var homeWins =0; var homeLoss =0;
                 var homeTies =0; var awayWins =0; var awayLoss =0; var awayTies =0;

              for(var i in main.rounds1){

                for( var j in main.rounds1[i].matches){

                    if (main.rounds1[i].matches[j].team1.name == data1){
                      
                       main.code1 = main.rounds1[i].matches[j].team1.code;

                       matches++ ; 

                      goalsFor += main.rounds1[i].matches[j].score1 ;
                   
                      goalsAgainst += main.rounds1[i].matches[j].score2;
                    

                      if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        wins ++ ; 
                        homeWins ++
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        loss ++;
                        homeLoss++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn ++;
                        homeTies++;
                      }
                      
                    } // If !
                    
                    
                    else if(main.rounds1[i].matches[j].team2.name == data1){

                       main.code1 = main.rounds1[i].matches[j].team2.code ;
                      
                       matches++ ;

                       goalsFor += main.rounds1[i].matches[j].score2 ;

                       goalsAgainst += main.rounds1[i].matches[j].score1 ;
                      
                       if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        loss++ ; 
                        awayLoss++;
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        wins++;
                        awayWins++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn++;
                        awayTies++;
                      }

                    }      //else if ends

            
                  }
                    
              }        //FOR-IN ends 



                   if(response.data.name =="English Premier League 2015/16"){       
                       
                     //  console.log("working");

                  main.totalMatches1.year="2015/16" ;
                  main.totalMatches1.matches = matches;
                  main.totalMatches1.goalsFor = goalsFor;
                  main.totalMatches1.goalsAgainst = goalsAgainst;
                  main.totalMatches1.loss = loss;
                  main.totalMatches1.wins = wins;
                  main.totalMatches1.drawn = drawn;
                  main.totalMatches1.winPercent = ((wins/matches)*100).toFixed(2);
                  main.totalMatches1.lossPercent = ((loss/matches)*100).toFixed(2);
                  main.totalMatches1.homeWins = homeWins;
                  main.totalMatches1.homeLoss = homeLoss;
                  main.totalMatches1.homeTies = homeTies;
                  main.totalMatches1.awayWins = awayWins;
                  main.totalMatches1.awayLoss = awayLoss;
                  main.totalMatches1.awayTies = awayTies;


                      }

                    else if(response.data.name =="English Premier League 2016/17"){

                  main.totalMatches2.year = "2016/17";
                  main.totalMatches2.matches = matches;
                  main.totalMatches2.goalsFor = goalsFor;
                  main.totalMatches2.goalsAgainst = goalsAgainst;
                  main.totalMatches2.loss = loss;
                  main.totalMatches2.wins = wins;
                  main.totalMatches2.drawn = drawn;
                  main.totalMatches2.winPercent = ((wins/matches)*100).toFixed(2);
                  main.totalMatches2.lossPercent = ((loss/matches)*100).toFixed(2);
                  main.totalMatches2.homeWins = homeWins;
                  main.totalMatches2.homeLoss = homeLoss;
                  main.totalMatches2.homeTies = homeTies;
                  main.totalMatches2.awayWins = awayWins;
                  main.totalMatches2.awayLoss = awayLoss;
                  main.totalMatches2.awayTies = awayTies;

                }

          };


           this.statsCheck1 = function(data1){ 

              if (data1 == null){
                  alert ("Enter team name!"); 
                }
                else {

                   $http({
                    method:"GET",
                    url: main.baseUrl1
              }).then(function successCallback(response){

                this.names1=[];

               for(var i=0; i<response.data.rounds[0].matches.length;i++){
             //   console.log(response.data.rounds[0].matches.length);
         
                  this.names1.push(response.data.rounds[0].matches[i].team1.name);

                    }
                  //  console.log(this.names1);

                for(var i=0;i<response.data.rounds[0].matches.length;i++){
         
                  this.names1.push(response.data.rounds[0].matches[i].team2.name);

                    }

               if(this.names1.includes(data1)){
                  if(main.value2){               // toggling 2015/16 stats button
                    main.value2 = false;   
                     main.value1 = true;
                    }

                else{
                    main.value1 = true;
                  } 

                   main.teamStats(response,data1);
                   }

                   else{
                    alert("Team didn't play in 2015 !");
                   // main.value1 = false;
                   }      

             }, function errorCallback(reason){   
                alert("Error in GET");
                  })           

              }
               }; 

            this.statsCheck2 = function(data1){ 

                if (data1 == null){
                  alert ("Enter team name!"); 
                }
                else {


              $http({
                    method:"GET",
                    url: main.baseUrl2
              }).then(function successCallback(response){
             
              this.names2=[];

               for(var i=0;i<response.data.rounds[0].matches.length;i++){
         
                  this.names2.push(response.data.rounds[0].matches[i].team1.name);

                    }
                for(var i=0;i<response.data.rounds[0].matches.length;i++){
         
                  this.names2.push(response.data.rounds[0].matches[i].team2.name);

                    }

                if(this.names2.includes(data1)){

                  if(main.value1 == true){
                          main.value1 = false ;
                           main.value2 = true;
                       }
                      else {
                    main.value2 = true;
                  }

                   main.teamStats(response,data1);
                   }

                   else{
                    alert("Team didn't play in 2016 !");
                   }

              }, function errorCallback(reason){   
                alert("Error in GET");
                  })         
                }   
             } ;                          

        }]) // controller ends
