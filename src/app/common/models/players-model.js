angular.module('lcsStalker.models.players', [

    ])
    .service('PlayersModel', function($http){
        var model = this,
            URLS = {
                FETCH: 'data/players.json'
            },
            players;

        function extract( result ) {
            return result.data;
        }

        function cachePlayers( result ) {
            players = extract(result);
            return players;
        }

        model.getPlayers = function() {
            return $http.get(URLS.FETCH).then(cachePlayers);
        }
    })
;