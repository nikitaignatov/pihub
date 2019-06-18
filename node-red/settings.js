//var fs = require("fs");

// https://github.com/node-red/node-red/blob/master/packages/node_modules/node-red/settings.js
module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            permissions: "*"
        }]
    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {
        projects: { enabled: true }
    }
}
