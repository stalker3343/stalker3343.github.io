'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_CONFIG: {
    apiKey: '"AIzaSyDs8Wqxf5K5eVnkP5XB_FtzeekD0D2MmMo"',
    authDomain: '"my-project-1501683622618.firebaseapp.com"',
    databaseURL: '"https://my-project-1501683622618.firebaseio.com"',
    projectId: '"my-project-1501683622618"',
    storageBucket: '"my-project-1501683622618.appspot.com"'
  }
})
