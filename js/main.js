'use strict';

var grocery = angular.module('grocery', []);

grocery.controller('groceryListCtrl', function ($scope) {
    $scope.groceries = [];

    $scope.newItem = '';

    $scope.addItem = function () {
        if ($scope.newItem === "") {
            alert("Please provide the item name");
            return;
        }

        $scope.groceries.push({
            name: $scope.newItem
        });
        $scope.newItem = '';
    }

    $scope.removeItem = function (item) {
        removeFromArray($scope.groceries, item);
    }

    $scope.onKeyup = function (event) {
        if (event.keyCode === 13) {
            $scope.addItem();
        }
    }
    
//    $scope.form = function () {
//        if ($scope.groceries = '') {
//            alert('Please add an item to the list first');
//            return;
//        }
//        else (console.log('elo'));
//    }
});

var removeFromArray = function (array, item) {
    array.splice(array.indexOf(item), 1);
}

//grocery.directive("awesomeButton", function(){
//    return{
//      restrict: "E",
//      scope: {
//         message: "<"  
//      },
//      controller: function($scope){
//          $scope.clicked = function(){
//              alert($scope.message);
//          }
//      },
//      template: "<button ng-click='clicked()'>Awesome button</button>"
//    };
//});

grocery.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                 var myEl = angular.element( document.querySelector( '.user-form' ) );
                myEl.addClass('show');
             } 
            scope.$apply();
        });
    };
});

grocery.controller('userCtrl', function($scope) {
 
  $scope.user= [{
    fName: "Konrad",
    lName: "Studzinski",
    street: "Pilotow",
    delivery: "Delivery"
  }];
 
  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, delivery: userInfo.delivery
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }
})