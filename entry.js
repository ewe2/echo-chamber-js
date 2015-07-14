var EchoChamber = (function (window, undefined) {

  var EchoChamber = window.EchoChamber || {};

  var hosts = {
    local: 'http://localhost/~ewe2/echo-chamber-js',
    prod: 'https://ewe2.ninja/ec'
  }

  EchoChamber.host = hosts.local;
  EchoChamber.App = require('./src/echo_chamber.js'); 

  var app = Object.create(EchoChamber.App);
  app.init();
  
  return app;

})(window);
