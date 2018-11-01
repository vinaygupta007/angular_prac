// var app = angular.module("angular_tut", ["ngRoute","controllerTutModule"]);

// app.config(function($routeProvider){
    
//     $routeProvider

//     .when("/",{
//         templateUrl:"Views/TutFirst.html",
//         controller:"ControllerTut"
//     })
//     .when("/TutSecond",{
//         templateUrl:"Views/TutSecond.html",
//         controller:"ControllerTut"
//     })
//     .otherwise({
//         redirectTo:"/"
//     });

// });

var app = angular.module('angular_tut',[]);

app.controller("appName", ["$scope", function($scope) {

    $scope.appTitleName="Vinay Gupta";
    
}]);

app.controller("listItem", ["$scope", function($scope) {

    $scope.groceryItemList=[
        {completed:true, ItemName:"milk", date:"1/11/2018" },
        {completed:true, ItemName:"burfi", date:"1/11/2018" },
        {completed:true, ItemName:"coffee", date:"1/11/2018" },
        {completed:true, ItemName:"sakes", date:"1/11/2018" },
        {completed:true, ItemName:"ice cream", date:"1/11/2018" },
        {completed:true, ItemName:"chocolates", date:"1/11/2018" },
        {completed:true, ItemName:"waffers", date:"1/11/2018" },
        {completed:true, ItemName:"nothing", date:"1/11/2018" }
    ]
}]);