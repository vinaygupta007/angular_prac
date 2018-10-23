
angular.module("controllerTutModule", [])

.controller("ControllerTut", ["$scope", "Calculations", function($scope, Calculations){

    $scope.name={};
    $scope.name.first = "First";
    $scope.name.second="second"; 
    $scope.name.value = 2;

    $scope.addTwo = function(){
        $scope.name.value = Calculations.addTwo($scope.name.value);
    }  
}])

.directive("myDirective", function(){

    return {
        "restrict":"E",
        "template":"<div>Custom Diretive</div>"
    }
})

.factory("Calculations", function(){

    var calculations = {};

    calculations.addTwo = function(a){
        return a+2;
    }
    return calculations;

});
