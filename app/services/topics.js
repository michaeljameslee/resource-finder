'use strict';

myApp.service('Topics', ['$http', function ($http) {

	var Topics = {
		get: function() {

			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'data/topics.json',
				headers: {'Content-type': 'application/json'}
			}).success(function(data) {
				deferred.resolve(data.topics);
			}).error(function() {
				deferred.reject({message: 'The was an error getting products.', status: 'error'});
			});
			return deferred.promise;
		}
	};
	return Topics;
}]);
