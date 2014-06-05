/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    
    type: {
      type: 'string',
      defaultsTo: 'student'
    },

    email: {
      type: 'string',
      required: true
    },

    password_hash: {
      type: 'string',
      required: true
    },

    classes: {
      type: 'array',
      defaultsTo: []
    }    
  }

};
