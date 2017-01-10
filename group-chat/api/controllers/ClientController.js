module.exports = {

  /**
   * Action blueprints:
   *    `/client/create`
   */
   create: function (req, res) {

    var name = req.param("name");
    var redirectURI = req.param("redirectURI");

    Client.create({ name : name,
                    redirectURI: redirectURI
    }).exec(function(err, client){
      if(err){
        return res.send(500, {error: err.message});
      } else {
        return res.json(client);
      }
    });
  },


  /**
   * Action blueprints:
   *    `/client/index`
   *    `/client`
   */
   index: function (req, res) {
     Client.find({}, function(err, clients){
       if(err){
         return res.send(500, {error: err.message});
       } else {
         return res.json(clients);
       }
     });
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ClientController)
   */
  _config: {}


};