/**
 * exposeAngular
 *
 * @module      :: Policy
 * @description :: Expose the Angular app through express
 *
 */
module.exports = function(req, res, next) {

  console.log('HI');

  console.log(__dirname);
  var express = sails.app.express;

  app.use('/angular', express.static(__dirname + '/../angular'));



  return next();

};
