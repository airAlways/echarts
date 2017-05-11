var app = angular.module('myapp',['ngRoute']);

console.log("main.js")
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/home',{
            templateUrl:'./tpls/home.html'
        })
        .when('/detail',{
            templateUrl:'./tpls/detial.html'
        })
        .otherwise('/home')
}])