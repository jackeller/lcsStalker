angular.module('lcsStalker.models.teams', [

])
    .service('TeamsModel', function($http) {
        var model = this,
            URLS = {
                FETCH: 'data/teams.json'
            },
            teams;

        function extract( result ) {
            return result.data;
        }

        function cacheTeams( result ) {
            teams = extract(result);
            return teams;
        }

        model.getTeams = function() {
            return $http.get(URLS.FETCH).then(cacheTeams);
        }
    })
;