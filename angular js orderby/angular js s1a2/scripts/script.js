/// <reference path="angular.min.js" />


var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {

    var employees = [
        {name: "ajay" , DOB:  ("january 24,1992"), gender : "male"},
    {name: "rajesh" , DOB:  ("april 01,1991"), gender : "male"},
        {name: "kajal" , DOB:  ("may 11,1993"), gender : "female"},
];

$scope.employees = employees;
$scope.sortcolumn = "name";
    

         
    }); 

