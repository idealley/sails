/**
 * ChatController
 *
 * @description :: Server-side logic for managing Chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index:function (req,res) {
        var data = req.params.all();
        if(req.isSocket && req.method === 'POST') {
        Chat.create({'message': data.message, 'user': data.user } ,function(err,message){
            if(err) {
                sails.log(err);
                sails.log("Error occurred in database operation");
            } else {
                console.log('message: ', message)
                Chat.publishCreate({id: message.id, message : message.message , user: message.user});
            }
        });
        } else if(req.isSocket){
            Chat.watch(req.socket);
            sails.log( 'User subscribed to ' + req.socket.id );
        }
        if(req.method === 'GET') {
        Chat.find().exec(function(err,messages){
            if(err) {
                sails.log(err);
                sails.log("Error occurred in database operation");
            } else {
                console.log('messages: ', messages)
                res.send(messages);
            }
        });
        }
    }
};

