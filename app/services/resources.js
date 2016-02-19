'use strict';

myApp.service('Resources', ['$http', function ($http) {

	var Resources = {
		getByTopicId: function(id) {

			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'data/resources.json',
				headers: {'Content-type': 'application/json'}
			}).success(function(data) {

				var filteredData = _.filter(data.resources, function(item){
					return _.findWhere(item.topics, id);
				});

				Resources.resources = filteredData;
				deferred.resolve(filteredData);

			}).error(function() {
				deferred.reject({message: 'The was an error getting products.', status: 'error'});
			});
			return deferred.promise;

		},
		resources: []
	};
	return Entity;
}]);
