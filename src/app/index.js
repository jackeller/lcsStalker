'use strict';

angular.module('lcsStalker', [
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        // 'ngRoute',
        'teams',
        'teams.players'
    ])

    // .config(function($stateProvider) {
    //   $stateProvider
    //     .state('default', {
    //         url: '/',
    //         // templateUrl: 'app/teams/teams.tmpl.html',
    //         templateUrl: 'app/main/main.html',
    //         controller: 'MainCtrl'

    //         // .when('/', {
    //         //     templateUrl: 'app/main/main.html',
    //         //     controller: 'MainCtrl'
    //         // })
    //         // .otherwise({
    //         //     redirectTo: '/'
    //         // });
    //     })

        .config(function ($stateProvider) {
          $stateProvider
              .state('default', {
                  url: '/', // Make to navigate to index.html#/
                  // templateUrl: 'app/teams/teams.tmpl.html',
                  templateUrl: 'app/main/main.html',
                  controller: 'MainCtrl'
              })
          ;
      
    });