const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  birthday: String,
  role: String
})

profileSchema.virtual('fullName').
get(function() {return this.name.first + " " + this.name.last}).
set(function(v) {
  this.name.first = v.substr(0, v.indexOf(' '))
  this.name.last = v.substr(v.indexOf(' ') + 1)
})

const Profile = mongoose.model("Profile", profileSchema)
module.exports = Profile