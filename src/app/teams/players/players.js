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

    .controller('PlayersCtrl', function($stateParams, PlayersModel, TeamsModel){
        var playersListCtrl = this;

        TeamsModel.setCurrentTeam($stateParams.team);

        // <iframe src="http://www.twitch.tv/imaqtpie/embed" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/imaqtpie?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from imaqtpie on www.twitch.tv</a>

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

                    console.log( player.name + " is " + player.twitchStatus);
                });
        }

        PlayersModel.getPlayers()
            .then(function(players) {
                playersListCtrl.players = players;
            });

        playersListCtrl.getCurrentCategory = TeamsModel.getCurrentCategory;
        playersListCtrl.getCurrentCategoryName = TeamsModel.getCurrentCategoryName;
    });