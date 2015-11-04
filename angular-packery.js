(function() {
	'use strict';
	var Packery = require('packery');
	var loadOnCompile = false;
	var loadPackery = null;
	var generateLoad = function(element, options) {
		return function() {
			return new Packery(element.children('div')[0], options);
		};
	};

	module.exports = function() {
		return {
			restrict: 'E',
			scope: {
				options: '=',
				loadOn: '@'
			},
			template: '<div ng-transclude></div>',
			transclude: true,
			controller: ['$scope', function($scope) {
				var loadOnEvent = $scope.loadOn;

				if(loadOnEvent) {
					$scope.$on(loadOnEvent, function() {

						if(loadPackery === null) {
							loadOnCompile = true;
						} else {
							loadPackery();
						}
					});
				}
			}],
			link: function($scope, element, attrs, controller, transcludeFn) {
				loadPackery = generateLoad(element, $scope.options);

				if(element.hasClass('js-packery') || loadOnCompile) {
					loadPackery();
				}
			}
		};
	};
})();