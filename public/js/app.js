(function() {
  angular
    .module('MySite', ['ui.router'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
    })
        // .state('home.about',
    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'contact.html',
    })
    // home.about.work
    .state('work', {
      url:'/work',
      templateUrl: 'work.html',
    })
    .state('bok', {
      url:'/bok-burger-list',
      templateUrl: 'bokburgerlist.html',
    })
    .state('tuts', {
      url:'/turn-up-time-system',
      templateUrl: 'tuts.html',
    })
    .state('spaced', {
      url:'/spaced-out',
      templateUrl: 'spaced.html',
    })
    .state('blends', {
      url:'/r-blends',
      templateUrl: 'blends.html',
    })
    .state('simply', {
      url:'/simply-shorten',
      templateUrl: 'simply.html',
    })
    .state('work.design', {
      url:'/design',
      templateUrl: 'design.html',
    })
    .state('work.development', {
      url:'/development',
      templateUrl: 'development.html',
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    }); //locationProvider

  } //MainRouter
})() //IIFE
