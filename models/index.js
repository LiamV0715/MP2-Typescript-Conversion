"use strict";
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports.Pet = require('./pets');
module.exports.Comment = require('./comment');
