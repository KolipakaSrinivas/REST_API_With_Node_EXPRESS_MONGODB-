const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedChannelName: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('subscribers',subscribersSchema)
