//
//  Archanova.js
//  Archanova
//
//  Created by Franky Aguilar on 7/9/19.
//
'use strict';

var ArchanovaClass = function() {
    var jello = "JELLO VARIABLE";
}

// BASE METHOD
var methodSimple = function(string) {
    return("should say", string);
}

var methodPromise = function () {
    this.simplePromise().then(resolve => {
      if (typeof callback === 'function') {
            callback(resolve);
      }
    });
}

var simplePromise = function () {
  return new Promise(function (resolve) {
    resolve("promiseTester Initialized");
  });
}




