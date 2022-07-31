const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  birthday: String,
  roll: String
}, {
  virtuals: {
    fullName: {
      get() {
        return this.name.first + " " + this.name.last
      },
      set(v) {
        this.name.first = v.substr(0, v.indexOf(' '))
        this.name.last = v.substr(v.indexOf(' ') + 1)
      }
    }
  }
})

const Profile = mongoose.model("Profile", profileSchema)
module.exports = Profile