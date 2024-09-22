const mongose = require('mongoose');
const userSchema = new mongose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  });

module.exports =  mongose.model("User",userSchema);