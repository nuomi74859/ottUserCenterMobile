/**
 * Created by Administrator on 2014/8/27.
 */
(function(){
    'use strict';
    var myAngularDir = angular.module('MyAngularDir', []);

    myAngularDir.directive('halo',function(){
        return {
            scope:{
                flav:'@'
            },
//            独立作用域，防止相互污染
            restrict:'AE',
            template:'<div><input type="text" ng-model="flav"></div>{{flav}}<div ng-transclude></div> ',
            transclude:true,
            link:function(s,e,a){
//                e.addClass('test');
            }
        }
    });
    myAngularDir.directive('ottHeightInit',function(){
        return {
            restrict:'AE',
            template:'<div ng-transclude></div> ',
            transclude:true,
            link:function(scope,element,attr){
                var eId = scope.$index;
                console.log(scope);
                element.height(element.width());
                $(window).off('resize.' + eId).on('resize.' + eId,function(){
                    element.height(element.width());
                    console.count('resize:');
                });
            }
        }
    });
})();

