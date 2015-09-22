// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in is_char(character)             ndex.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('gcApp', ['ionic'])

.run(function ($ionicPlatform) {

  'use strict';
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  'use strict';

  $stateProvider.state('gc', {
      url: '/gc',
      abstract: true,
      templateUrl: 'components/menu/menu.html'
    })
    .state('gc.metronome', {
      url: '/metronome',
      views: {
        'menuContent': {
          templateUrl: 'components/metronome/metronome.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/gc/metronome');
});