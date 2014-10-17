/**
 * Created by Administrator on 2014/8/27.
 */
(function(){
    'use strict';
    var myAngularDir = angular.module('MyAngularDir', []);

    myAngularDir.directive('halo',function(){
        return {
            scope:{
                flav:'='
            },
//            独立作用域，防止相互污染
            restrict:'AE',
            template:'<div><input type="text" ng-model="flav"></div>{{flav}}<div ng-transclude></div> ',
            transclude:true,
            link:function(s,e,a){
                console.log(a);
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
    myAngularDir.directive('contenteditable',function(){
        return {
            require:'ngModel',
            link:function(scope, element, attr, ctrl){
                //view->model
                element.bind('keyup',function(){
                    scope.$apply(function(){
                        ctrl.$setViewValue(element.text());
                    });
                });
                //model ->view
                ctrl.$render = function(){
                    element.html(ctrl.$viewValue);
                };
                //load inint value from DOM
                ctrl.$setViewValue(element.html());
            }
        }
    });
})();

