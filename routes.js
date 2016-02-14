'use strict';
let page = require('page');

module.exports = function(opts) {
  let routes = [
    ['/', RukusApp.ui.route({page: 'home'})],
    ['/show/:id', RukusApp.ui.route({page: 'show'})],
    ['*', RukusApp.ui.route({page: '404'})]
  ];

  routes.forEach(function(route) {
    page(route[0], route[1]);
  });
  page.start();
}