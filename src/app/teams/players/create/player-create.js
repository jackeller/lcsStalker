/**
* teams.players.create Module
*
* Description
*/
angular.module('teams.players.create', [

    ])
        .config(['$stateProvider',function($stateProvider) {
            $stateProvider
                .state('default.teams.players.create', {
                    url: '/players/create',
                    templateUrl: 'app/teams/players/create/player-create.tmpl.html',
                    controller: 'CreatePlayerCtrl as createPlayerCtrl'
                });
        }])

        .controller('CreatePlayerCtrl', ['', function(){

        }])
;