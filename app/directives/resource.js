'use strict';

MyApp.directive('resource', function(){
		return {
			restrict: 'E',
			scope: {
				resource: '='
			},
			templateUrl: 'data/resource.html'
		};
	});
