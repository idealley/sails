'use strict';

module.exports.adminpanel = {
    instances: {

        messages: {

            title: 'messages',
            model: 'Chat',

            list: {
                fields: {
                    id: false,
                    user: 'User name',
                    email: 'Email',
                    message: 'Message',
                    createdAt: 'Created',
                    updatedAt: 'Created'
                }
            },

            edit: {
                fields: {
                    id: false,
                    email: 'Email',
                    message: 'Message'

                }
            }
        },

        users: {
            title: 'Users',
            model: 'User'
        },

        clients: {
            title: 'clients',
            model: 'Client'

        },

        AuthCode: {
            title: 'AuthCodes',
            model: 'AuthCode'
        },

        AccessToken: {
            title: 'AccessToken',
            model: 'AccessToken'
        },

    },

    policies: 'isAuthenticated',
};