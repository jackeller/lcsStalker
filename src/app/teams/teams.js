/**
* teams Module
*
* Description
*/
angular.module('teams', [
    'lcsStalker.models.teams'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('default.teams', {
                url: '/',
                views: {
                    'players@': {
                        controller: 'PlayersCtrl as playersListCtrl',
                        templateUrl: 'app/teams/players/players.tmpl.html'
                    },
                    'teams@' : {
                        controller: 'TeamsListCtrl as teamsListCtrl',
                        templateUrl: 'app/teams/teams.tmpl.html'
                    }
                }
            });
    })
    .controller('TeamsListCtrl', function (TeamsModel){
        var teamsListCtrl = this;
        teamsListCtrl.teams = TeamsModel.getTeams();
    });