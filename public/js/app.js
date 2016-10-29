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
    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
    })
    .state('contact', {
      url:'/contact',
      templateUrl: 'contact.html',
    })
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
    .state('final', {
      url:'/final-project',
      templateUrl: 'final.html',
    })
    .state('design', {
      url:'/design',
      templateUrl: 'design.html',
    })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    }); //locationProvider

  } //MainRouter
})() //IIFE
