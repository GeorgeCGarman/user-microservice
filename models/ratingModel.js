const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({
  user_id: String,
  target_id: String,
  stars: Number,
  comment: String
})

Rating = mongoose.model("Rating", ratingSchema)

module.exports = Rating
