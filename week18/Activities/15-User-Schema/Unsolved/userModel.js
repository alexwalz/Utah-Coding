var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  username: {
    type: String,
    trim: true,
    unique: true,
    required: "name is Required"
  },

  password: {
    type: String,
    required: true,
    min: [6, "Requires atleast 6 characters"],
    max: 16,
    // validate: [
    //   function(input) {
    //     return input.length >= 6;
    //   },
    //   "Password should be longer."
    // ]
  },

  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
  },

  userCreated: {
    type: Date,
    default: Date.now
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
