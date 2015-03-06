angular.module('lcsStalker.models.teams', [

])
    .service('TeamsModel', function($http) {
        var model = this,
            URLS = {
                FETCH: 'data/teams.json'
            },
            teams;

        model.getTeams = function() {
            return $http({
                method: 'jsonp',
                url:  URLS.FETCH,
                responseType: "json"
            });
        }
    })
;