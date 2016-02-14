'use strict';
let page = require('page');

module.exports = function(opts) {
  let routes = [
    ['/pisang', RukusApp.party({page: 'pisang'})],
    ['/banana', RukusApp.party({page: 'banana'})],
    ['*', RukusApp.party({page: '404'})]
  ];

  routes.forEach(function(route) {
    page(route[0], route[1]);
  });
  page.start();
}