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

    .controller('PlayersCtrl', function($stateParams, $sce, PlayersModel, TeamsModel){
        var playersListCtrl = this;

        TeamsModel.setCurrentTeam($stateParams.team);

        console.log( "statepaprams team is ",  $stateParams.team);

        // <iframe src="http://www.twitch.tv/imaqtpie/embed" frameborder="0" scrolling="no" height="200" width="300"></iframe><a href="http://www.twitch.tv/imaqtpie?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from imaqtpie on www.twitch.tv</a>

        playersListCtrl.trustURL = function (twitchID) {
          return $sce.trustAsResourceUrl('http://www.twitch.tv/' + twitchID + "/embed");
        };

        playersListCtrl.getTwitchOnlineStatus = function( player ) {

            player.twitchStatus = "Loading...";
            // console.log("Getting twitch status for " + player.name + " aka " + player.twitch);

            PlayersModel.getTwitchOnlineStatus( player.twitch )
                .then( function(result) {

                    if ( result.stream ) {
                        player.twitchStatus = "Online";
                        player.twitchEmbed = player.twitch;
                    } else {
                        player.twitchStatus = "Offline";
                    }

                    if (player.twitchStatus == "Online") {
                        console.warn( player.name + " is " + player.twitchStatus );
                    } else {
                        // console.log( player.name + " is " + player.twitchStatus);
                    }

                });
        }

        PlayersModel.getPlayers()
            .then(function(players) {
                playersListCtrl.players = players;
            });

        playersListCtrl.getCurrentTeam = TeamsModel.getCurrentTeam;
        playersListCtrl.getCurrentTeamName = TeamsModel.getCurrentTeamName;

    })

    .directive('twitchIframe', function(){
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<iframe ng-if="player.twitchEmbed" ng-src="{{ playersListCtrl.trustURL( player.twitchEmbed ) }} "></iframe>',
            // templateUrl: '/src/components/iframe/iframe.tmpl.html',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {
                console.warn("twitch iframe directive");

                // if ( $scope.player.twitch == "riotgames" ) {
                //     $scope.player.foo = "raaaaa";
                // }

            }
        };
    })
;


