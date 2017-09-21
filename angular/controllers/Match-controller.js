
  
 // var myApp = angular.module('matchesApp',['ngRoute']);

// Match Controller starts
  
    myApp.controller("MatchController", ['$http','$location','$routeParams',function($http,$location,$routeParams){



        var main = this ;


        this.matchId1 = $routeParams.matchid1 ;
        this.matchId2 = $routeParams.matchid2 ;
        console.log(this.matchId1);
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
      //  window.history.back();

      $location.path("/main");
      }

      this.matchStats = function(data){
       // console.log(data);
        main.rounds1 = data.rounds;

    //  console.log(main.matchId1);
     // console.log(main.matchId2);

      for (var i in main.rounds1){


         for (var j in main.rounds1[i].matches){

          // looping based on routeParams ID 

            if (main.rounds1[i].matches[j].team1.code == main.matchId1 && main.rounds1[i].matches[j].team2.code == main.matchId2 && main.rounds1[i].matches[j].date == main.matchDate){

          //    console.log("working");

             main.day = main.rounds1[i].name;
                      
                   main.date = main.rounds1[i].matches[j].date;
                   main.team1 = main.rounds1[i].matches[j].team1.name;
                     
                   main.team2 = main.rounds1[i].matches[j].team2.name;
                     

                  main.score1 =main.rounds1[i].matches[j].score1;
                  main.score2 = main.rounds1[i].matches[j].score2;
                 main.code1 = main.rounds1[i].matches[j].team1.code;
                    //    console.log(main.code1);
                main.code2 = main.rounds1[i].matches[j].team2.code;
                   

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

