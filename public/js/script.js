(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = function () {
  var hoge = function hoge(arg1, arg2) {
    if (arg1 === undefined) arg1 = 1;

    console.log(arg1, arg2);
  };
  hoge();
};

},{}],2:[function(require,module,exports){
/*
const Animal = require("./classes");
const animal = new Animal("tama");
animal.name = "hogehogheo";
console.log(animal.name);
animal.nyaa(Date.now());
*/
//require("./let")();
//require("./const")();
//require("./arrow")();
//require("./literals")();
"use strict";

require("./default-parameters")();

},{"./default-parameters":1}]},{},[2]);
