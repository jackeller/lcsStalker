'use strict';

angular.module('lcsStalker', [
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'teams',
        'teams.players'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('default', {
                url: '',
                abstract: true
            });
        $urlRouterProvider.otherwise('/');
    });
