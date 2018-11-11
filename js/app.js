var app = angular.module("angular_tut", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "Views/viewGroceryList.html",
      controller: "listItem"
    })
    .when("/addNewGroceryItem", {
      templateUrl: "Views/addNewGroceryItem.html",
      controller: "ControllerTut"
    });
});

app.controller("appName", [
  "$scope",
  function($scope) {
    $scope.appTitleName = "Vinay Gupta";
  }
]);

app.service("listService", function() {
  var groceryService = {};

  groceryService.groceryItem = [
    { id: 1, completed: true, ItemName: "milk", date: "1/11/2018" },
    { id: 2, completed: true, ItemName: "burfi", date: "1/11/2018" },
    { id: 3, completed: true, ItemName: "coffee", date: "1/11/2018" },
    { id: 4, completed: true, ItemName: "sakes", date: "1/11/2018" },
    { id: 5, completed: true, ItemName: "ice cream", date: "1/11/2018" },
    { id: 6, completed: true, ItemName: "chocolates", date: "1/11/2018" },
    { id: 7, completed: true, ItemName: "waffers", date: "1/11/2018" },
    { id: 8, completed: true, ItemName: "nothing", date: "1/11/2018" }
  ];
  return groceryService;
});

app.controller("listItem", [
  "$scope",
  "$routeParams",
  "$location",
  "listService",
  function($scope, listService, $routeParams, $location) {
    $scope.groceryItemList = listService.groceryItem;

    $scope.groceryItem = {id:7, completed: true, itemName : "Cheese", date: new Date()}
  }
]);

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
