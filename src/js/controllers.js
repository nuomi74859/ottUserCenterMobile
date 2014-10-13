/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularCtrls = angular.module('MyAngularCtrls', []);


myAngularCtrls.controller('tpls',['$scope','$state','greeting',
    function($scope,$state,greeting){
        $scope.text = greeting;
        console.log($state);

        $scope.$on('$viewContentLoading',
            function(event, viewConfig){
                alert('start');
            }
        );
//        $scope.$on('$viewContentLoaded',
//            function(event, viewConfig){
//                alert('end')
//            }
//        );
    }
]);