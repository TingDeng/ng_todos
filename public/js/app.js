var app = angular.module('ngTodo',[]);//=ng-app


 app.controller('TodoConctroller',function($scope){
   //$scope.message = "I'm working...";
   $scope.todoList=['rake the yard',
                     'take a nap',
                     'take another nap',
                     'walk the dog',
                     'eat leftover meatloaf']
  $scope.saveTodo=function(){
    var todoInfo=$scope.currentTodo;
    $scope.todoList.push(todoInfo);
    $scope.currentTodo='';
  }
  $scope.removeTodo= function(singleTodo){
    var position=$scope.todoList.indexOf(singleTodo);
    $scope.todoList.splice(position,1);//1 means how many you want to remove at and after the index

  }
  $scope.editTodo=function(singleTodo){
   $scope.currentTodo=singleTodo;//input will be filled with which has the edit button you click
    $scope.removeTodo(singleTodo);//remove it from list first and you can save it again to add to list after edit
//var index=$scope.todoList.indexOf(singleTodo);
//$scope.todoList.splice(position,1,$scope.currentTodo);
//$scope.currentTodo='';
  }
});//get info from input and add to list and clear field
