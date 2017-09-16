

 //var myApp = angular.module("matchesApp",["ngRoute"]);

  // ******** ROUTE Configuration ********

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
            