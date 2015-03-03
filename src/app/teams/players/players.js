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
                        controller: 'PlayersCtrl as players',
                        templateUrl: 'app/teams/players/players.tmpl.html'
                    }
                }
            });
    })
    .controller('PlayersCtrl', function($stateParams){
        var players = this;
        players.currentTeamName = $stateParams.team;
    });