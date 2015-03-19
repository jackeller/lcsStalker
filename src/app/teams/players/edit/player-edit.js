/**
* teams.players.edit Module
*
* Description
*/
angular.module('teams.players.edit', [

    ])
        .config(['$stateProvider',function($stateProvider) {
            $stateProvider
                .state('default.teams.players.edit', {
                    url: '/players/edit',
                    templateUrl: 'app/teams/players/edit/player-edit.tmpl.html',
                    controller: 'EditPlayerCtrl as editPlayerCtrl'
                });
        }])

        .controller('EditPlayerCtrl', ['', function(){

        }])
;