/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        hashedPassword: {
            type: 'string',
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(values, next){
      bcrypt.hash(values.password, 10, function(err, hash) {
        if(err) return next(err);
        values.hashedPassword = hash;
        delete values.password;
        next();
      });
    }
};


