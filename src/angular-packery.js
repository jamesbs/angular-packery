(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['packery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('packery'));
    } else {
        root.angularPackery = factory(root.Packery);
    }
})(this, function(Packery) {
    return function() {
        /*
        *  generates the function with the proper directive scope to be 
        *  called on packery load triggers
        */
        var generateLoad = function(element, options) {
            return function() {
                return new Packery(element.children('div')[0], options);
            };
        };

        /**
         * if loadPackery is called before the link function, change the generate
         * function to call the load function immediately after
         */
        var loadPackery = function() {
            generateLoad = function(element, options) {
                var load = generateLoad(element, options);
                load();
                return load;
            };

            loadPackery = function() {};
        };

        return {
            restrict: 'E',
            scope: {
                options: '=',
                loadOn: '@',
                loadWatch: '@'
            },
            template: '<div class="tile-grid" ng-transclude></div>',
            transclude: true,
            controller: ['$scope', function($scope) {
                // listen in on event
                if($scope.loadOn) {
                    $scope.$on($scope.loadOn, function() {
                        loadPackery();
                    });
                }

                // listen in on expression
                if($scope.loadWatch) {
                    $scope.$on($scope.loadWatch, function() {
                        loadPackery();
                    });
                }
            }],
            link: function($scope, element, attrs, controller, transcludeFn) {
                loadPackery = generateLoad(element, $scope.options);
            }
        };
    }
});