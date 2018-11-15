var app = angular.module("angular_tut", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "Views/viewGroceryList.html",
      controller: "listItem"
    })
    .when("/addNewGroceryItem", {
      templateUrl: "Views/addNewGroceryItem.html",
      controller: "listItem"
    })
    .when("/addNewGroceryItem/edit/:id/", {
      templateUrl: "Views/addNewGroceryItem.html",
      controller: "listItem"
    });
});

app.controller("appName", [
  "$scope",
  function($scope) {
    $scope.appTitleName = "Vaibhav chopra";
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

  groceryService.findById = function(id) {
    for (var item in groceryService.groceryItem) {
      if (groceryService.groceryItem[item].id === id) {
        return groceryService.groceryItem[item];
      }
    }
  };

  groceryService.creatNewId = function() {
    if (groceryService.newId) {
      groceryService.newId++;
      console.log("create default method" + groceryService.newId);
      return groceryService.newId;
    } else {
      var maxId = _.max(groceryService.groceryItem, function(entry) {
        return entry.id;
      });

      groceryService.newId = maxId.id + 1;
      console.log("create second method" + groceryService.newId);
      return groceryService.newId;
    }
  };

  groceryService.save = function(entry) {
    var updatedItem = groceryService.findById(entry.id);
    if (updatedItem) {
      updatedItem.completed = entry.completed;
      updatedItem.ItemName = entry.ItemName;
      updatedItem.date = entry.date;
    } else {
      entry.id = groceryService.creatNewId();
      groceryService.groceryItem.push(entry);
    }
  };

  return groceryService;
});

app.controller("listItem", [
  "$scope",
  "$routeParams",
  "$location",
  "listService",
  function($scope, $routeParams, $location, listService) {
    $scope.groceryItemList = listService.groceryItem;

    if (!$routeParams.id) {
      $scope.groceryItem = {
        id: 0,
        completed: true,
        ItemName: "",
        date: new Date()
      };
    } else {
      $scope.groceryItem = _.clone(
        listService.findById(parseInt($routeParams.id))
      );
    }

    $scope.save = function() {
      listService.save($scope.groceryItem);
      $location.path("/");
    };
  }
]);
