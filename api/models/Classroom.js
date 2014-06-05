/**
 * Classroom
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    
    students: {
      type: 'array',
      defaultsTo: []
    },

    teachers: {
      type: 'array',
      defaultsTo: []
    },

    sessions: {
      type: 'array',
      defaultsTo: []
    }

    
  }

};
