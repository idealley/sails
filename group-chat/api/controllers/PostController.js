/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    
  index: function(req,res)
  {
    res.json({"msg":"if you see this you successfully went through OAuth2 authorization process"});
  },  

  livechat: function(req, res)
  {
    res.view('index');
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to InfoController)
   */
  _config: {}

};

