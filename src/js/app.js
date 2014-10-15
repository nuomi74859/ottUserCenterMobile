/**
 * Created by Administrator on 2014/8/27.
 */
(function(){
    'use strict';
    var myAngularApp = angular.module('MyAngularApp', [
        'ui.router', 'ngAnimate','MyAngularCtrls','MyAngularDir'
    ]);

    myAngularApp.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home',{
                url:'/home',
                templateUrl:'/tpls/home.html',
                controller:function($scope){
                    $scope.indexAnimate = true;
//                $scope.panels = ['user','user','user','user','user','user'];
                    console.log('route1');
                }
            }
        ).state('user',{
                url:'/user',
                templateUrl:'/tpls/user.html',
                controller:function($scope){
                    $scope.indexAnimate = false;
                    $scope.userTest = 'wakak';
                    console.log('route2');
                }
            }
        );
    });
    myAngularApp.run(function(){
        console.log('run')
    });
})();

