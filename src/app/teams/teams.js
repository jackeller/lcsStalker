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
                        controller: 'PlayersCtrl',
                        templateUrl: 'app/teams/players/players.tmpl.html'
                    },
                    'teams@' : {
                        controller: 'TeamsCtrl',
                        templateUrl: 'app/teams/teams.tmpl.html'
                    }
                }
            });
    })
    .controller('PlayersCtrl', ['$scope', function ($scope){

    }])
    .controller('TeamsCtrl', ['$scope', function($scope){

    }]);