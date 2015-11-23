// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url:'',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    .state('projects', {
        url:'/projects',
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsController'
    })
    .state('about', {
        url:'/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController'     
    })
    .state('contact', {
        url:'/contact',
        templateUrl: 'templates/contact.html',
        controller: 'EducationController'     
    })
    .state('skills', {
        url:'/skills',
        templateUrl: 'templates/skills.html',
        controller: 'SkillsController'     
    })
})

// Home page controller: define $scope.number as a number
    .controller('HomeController', function($scope){
      $scope.number = 6
    })


// Projects page controller: define $scope.about as a string
    .controller('ProjectsController', function($scope, $http){
      // $scope.about = 'Some info string'
      $http.get('data/projects.json').success(function(response) {
        $scope.projects = response;
      })
    })

// About controller: define $scope.url as an image
    .controller('AboutController', function($scope, $http){
      $http.get('data/about.json').success(function(response) {
        $scope.about = response;
        console.log($scope.about)
      })
    })

// Contact controller: define $scope.url as an image
    .controller('ContactController', function($scope){
    })

