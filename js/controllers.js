/*! angular 14-10-2014 */
var myAngularCtrls=angular.module("MyAngularCtrls",[]);myAngularCtrls.controller("tpls",["$scope","$state","greeting",function($scope,$state,greeting){$scope.text=greeting,console.log($state),$scope.$on("$viewContentLoading",function(){alert("start")})}]);