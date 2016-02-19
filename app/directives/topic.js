'use strict';

MyApp.directive('topic', function(Resources){
	return {
		restrict: 'E',
		scope: {
			topic: '='
		},
		templateUrl: 'data/topic.html',
		link: function(scope) {
			scope.filterResources = Resources.getByTopicId;
		}
	};
});

