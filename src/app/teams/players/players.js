/**
* teams.players Module
*
* Description
*/
angular.module('teams.players', [
    'teams.players.create',
    'teams.players.edit',
    'lcsStalker.models.teams',
    'lcsStalker.models.players'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('default.teams.players', {
                url: 'teams/:team',
                views: {
                    'players@' : {
                        controller: 'PlayersCtrl as playersListCtrl',
                        templateUrl: 'app/teams/players/players.tmpl.html'
                    }
                }
            });
    })

    .controller('PlayersCtrl', function($stateParams, PlayersModel){
        var playersListCtrl = this;
        playersListCtrl.currentTeamName = $stateParams.team;

        playersListCtrl.getTwitchOnlineStatus = function( player ) {

            player.twitchStatus = "Loading...";
            console.log("Getting twitch status for " + player.name + " aka " + player.twitch);

            PlayersModel.getTwitchOnlineStatus( player.twitch )
                .then( function(result) {

                    if ( result.stream ) {
                        player.twitchStatus = "Online";
                    } else {
                        player.twitchStatus = "Offline";
                    }
                });
        }

        // playersListCtrl.getTwitchOnlineStatus = getTwitchOnlineStatus;

        PlayersModel.getPlayers()
            .then(function(result) {
                playersListCtrl.players = result;
            });
    });