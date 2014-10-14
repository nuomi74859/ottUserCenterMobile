/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularApp = angular.module('MyAngularApp', [
    'ui.router', 'ngAnimate','MyAngularCtrls'
]);

myAngularApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home',{
            url:'/home',
            templateUrl:'/tpls/home.html',
            controller:function($scope){
                $scope.indexAnimate = true;
                $scope.$watch('ottPanel',function(){
                    console.log($scope.ottPanel);
                    var ottPanle = $('.ott-panel');
                    ottPanle.height(ottPanle.width());
                    $(window).resize(function(){
                        ottPanle.height(ottPanle.width());
                        console.log(ottPanle)
                    });
                });
//                $scope.panels = ['user','user','user','user','user','user'];
            }
        }
    ).state('user',{
            url:'/user',
            templateUrl:'/tpls/user.html',
            controller:function($scope){
                $scope.indexAnimate = false;
            }
        }
    );
});