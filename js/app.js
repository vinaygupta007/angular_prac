var app = angular.module("angular_tut", ["ngRoute","controllerTutModule"]);

app.config(function($routeProvider){
    
    $routeProvider

    .when("/",{
        templateUrl:"Views/TutFirst.html",
        controller:"ControllerTut"
    })
    .when("/TutSecond",{
        templateUrl:"Views/TutSecond.html",
        controller:"ControllerTut"
    })
    .otherwise({
        redirectTo:"/"
    });


})