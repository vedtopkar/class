/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  signup: function(req, res){
    var email = req.param('email');
    var name = req.param('name');
    var password = req.param('password');

    User.findOneByEmail(email).done(function(err, existing_user){
      if(err){
        console.log('Database error when creating user');
        res.send(500, {error: 'DB error'});
      } else if(user){
        res.send(400, {error: 'Username already taken'});
      } else {
        // var bcrypt = require('bcrypt');
        User.create({values: req.params}).done(function(err, user){
          if(err){
            req.flash.error('Error, try again');
            res.redirect('/signup');
          } else {
            req.session.user = user;
            res.send('Successfully signed up');
          }
        });
      }
    });
  },

  login: function(req, res){
    var bcrypt = require('bcrypt');

    var email = req.param('email');
    var password = req.param('password');

    User.findOneByEmail(email).done(function(err, user){
      if(err) {
        res.send(500, {error: "DB Error"});
      } else {
        if(user){
          bcrypt.compare(password, user.password_hash, function(err, passwordMatches){
            if(passwordMatches){
              req.session.user = user;
              res.redirect('/');
            } else {
              req.flash.error('Incorrect username or password');
              res.redirect('/login');
            }
          })
        }
      }
    })
  }


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
