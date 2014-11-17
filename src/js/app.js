/**
 * Created by Administrator on 2014/8/27.
 */
(function(){
    'use strict';
    var myAngularApp = angular.module('MyAngularApp', [
        'ui.router', 'ngAnimate','MyAngularCtrls','MyAngularDir','MyAngularFilter'
    ]);

    myAngularApp.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home',{
                url:'/home',
                templateUrl:'/tpls/home.html',
                controller:function($scope,$http,$location){
                    $scope.indexAnimate = true;
                    $scope.ottPanels = ['velocity','form','test','user','user','user'];
                    console.log('route1');
                    $http.get('/testData.json').success(function(data,status,headers,config){
//                        console.log(data,status,headers,config);
                    });
                    console.log($location.path());
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
        ).state('form',{
                url:'/form',
                templateUrl:'/tpls/form.html',
                controller:function($scope){
                    $scope.indexAnimate = false;
                    $scope.user = {
                        userName:'nuomi74859',
                        passWord:''
                    };
                    $scope.save = function(){
                        alert('保存数据');
                    }
                }
            }
        ).state('test',{
                url:'/test',
                templateUrl:'/tpls/test.html',
                controller:function($scope){
                    $scope.indexAnimate = false;
                    $scope.user = {
                        userName:'nuomi74859',
                        passWord:''
                    };
                    $scope.save = function(){
                        alert('保存数据');
                    }
                }
            }
        ).state('velocity',{
                url:'/velocity',
                templateUrl:'/tpls/velocity.html',
                controller:function($scope){
                    $scope.indexAnimate = false;
                }
            }
        );
    });
    myAngularApp.run(function(){
        console.log('run')
    });
})();

