const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect("mongodb://wpbarcelos:suporte1@ds241019.mlab.com:41019/udemyreact")
