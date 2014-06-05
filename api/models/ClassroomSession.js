/**
 * ClassroomSession
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    
    messages: {
      type: 'array',
      defaultsTo: []
    },

    modules: {
      type: 'array',
      defaultsTo: []
    },

    active_module: {
      type: 'string'
    }

  }

};
