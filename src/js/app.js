/**
 * Created by Administrator on 2014/8/27.
 */
var myAngularApp = angular.module('MyAngularApp', [
    'ui.router','MyAngularCtrls'
]);

myAngularApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/main');
    $stateProvider.state('main',{
            url:'/main',
            templateUrl:'/tpls/main.html',
            controller:function(){
                var ottPanle = $('.ott-panel');
                ottPanle.height(ottPanle.width());
            }
        }
    );
});
