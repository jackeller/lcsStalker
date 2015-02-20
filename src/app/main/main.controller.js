'use strict';

angular.module('lcsStalker')
  .controller('MainCtrl', function ($scope) {
        $scope.hello = "world";

        $scope.teams = [
            { "id" : 0, "name": "TSM" }
            { "id" : 1, "name": "C9" }
            { "id" : 2, "name": "CRS" }
            { "id" : 3, "name": "DIG" }
        ];

        
  })
;

// angular.module('lcsStalker', [

// ])
//     .service('lcsStalkerModel', function ($http) {
//         var model = this,
//             URLS = {
//                 FETCH: 'data/categories.json'
//             },
//             categories;

//         function extract(result) {
//             return result.data;
//         }

//         function cacheCategories(result) {
//             categories = extract(result);
//             return categories;
//         }

//         model.getCategories = function() {
//             return $http.get(URLS.FETCH).then(cacheCategories);
//         }
//     })


    // $scope.awesomeThings = getCategories().then

    // CategoriesModel.getCategories()
    //   .then(function(result){
    //       categoriesListCtrl.categories = result;
    //   });
    // $scope.awesomeThings = [
    //   {
    //     'title': 'AngularJS',
    //     'url': 'https://angularjs.org/',
    //     'description': 'HTML enhanced for web apps!',
    //     'logo': 'angular.png'
    //   },
    //   {
    //     'title': 'BrowserSync',
    //     'url': 'http://browsersync.io/',
    //     'description': 'Time-saving synchronised browser testing.',
    //     'logo': 'browsersync.png'
    //   },
    //   {
    //     'title': 'GulpJS',
    //     'url': 'http://gulpjs.com/',
    //     'description': 'The streaming build system.',
    //     'logo': 'gulp.png'
    //   },
    //   {
    //     'title': 'Jasmine',
    //     'url': 'http://jasmine.github.io/',
    //     'description': 'Behavior-Driven JavaScript.',
    //     'logo': 'jasmine.png'
    //   },
    //   {
    //     'title': 'Karma',
    //     'url': 'http://karma-runner.github.io/',
    //     'description': 'Spectacular Test Runner for JavaScript.',
    //     'logo': 'karma.png'
    //   },
    //   {
    //     'title': 'Protractor',
    //     'url': 'https://github.com/angular/protractor',
    //     'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
    //     'logo': 'protractor.png'
    //   },
    //   {
    //     'title': 'jQuery',
    //     'url': 'http://jquery.com/',
    //     'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
    //     'logo': 'jquery.jpg'
    //   },
    //   {
    //     'title': 'Foundation',
    //     'url': 'http://foundation.zurb.com/',
    //     'description': 'The most advanced responsive front-end framework in the world.',
    //     'logo': 'foundation.png'
    //   },
    //   {
    //     'title': 'Sass (Node)',
    //     'url': 'https://github.com/sass/node-sass',
    //     'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
    //     'logo': 'node-sass.png'
    //   }
    // ];
    // angular.forEach($scope.awesomeThings, function(awesomeThing) {
    //   awesomeThing.rank = Math.random();
    // });

