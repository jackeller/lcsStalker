angular.module('lcsStalker.models.teams', [

])
    .service('TeamsModel', function($http, $q) {
        var model = this,
            URLS = {
                FETCH: 'data/teams.json'
            },
            teams,
            currentTeam;

        function extract( result ) {
            return result.data;
        }

        function cacheTeams( result ) {
            teams = extract(result);
            return teams;
        }

        model.getTeams = function() {
            return (teams) ? $q.when(teams) : $http.get(URLS.FETCH).then(cacheTeams);
        }

        model.setCurrentTeam = function( teamName ) {
            return model.getTeamByName(teamName)
                .then(function(team) {
                    currentTeam = team;
                });
        }

        model.getCurrentTeam = function() {
            return currentTeam;
        }

        model.getCurrentTeamName = function() {
            return currentTeam ? currentTeam.name : '';
        }

        model.getTeamByName = function( teamName ) {
            var deferred = $q.defer();

            function findTeam() {
                return _.find(teams, function(c){
                    return c.name == teamName;
                })
            }

            if (teams) {
                deferred.resolve(findTeam());
            } else {
                model.getTeams()
                    .then(function(result){
                        deferred.resolve(findTeam());
                    })
            }

            return deferred.promise;
        }
    })
;