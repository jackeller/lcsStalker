angular.module('lcsStalker.models.players', [

    ])
    .service('PlayersModel', function($http){
        var model = this,
            URLS = {
                FETCH: 'data/players.json',
                TWITCH: 'https://api.twitch.tv/kraken/streams/'
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

        model.getTwitchOnlineStatus = function ( twitch ) {
            return $http.jsonp(URLS.TWITCH + twitch + "?callback=JSON_CALLBACK").then(extract);
        }
    })
;