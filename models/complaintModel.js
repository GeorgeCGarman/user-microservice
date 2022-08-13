const mongoose = require("mongoose")

const complaintSchema = new mongoose.Schema({
  user_id: String,
  timestamp: {type: Date, default: Date.now()},
  status: {type: String, default: "created"},
  comment: String
})

Complaint = mongoose.model("Complaint", complaintSchema)

module.exports = Complaint
