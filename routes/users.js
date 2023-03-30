const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/spotifyclone").then(function () {
  console.log("connect");
});


var userSchema = mongoose.Schema({
  name: String,
  username: String,
  passport: String,
  email: String,
  birth: String,
  gender: String,
  userdp: String,
  isadmin: {
    type: Boolean,
    default: false
  },
  productid: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "songs"
  }],
  playlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "playlist"
  }],
  listcounter: {
    type: Number,
    default: 1
  },
  address: String,
  contactnumber: Number,
  pic: {
    type: String,
    default: ""
  },
  createdadminsongs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "songs"
  }],
  adminExtra: String,
  adminExtra2: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "songs"
  }]

});


module.exports = mongoose.model("user", userSchema);

