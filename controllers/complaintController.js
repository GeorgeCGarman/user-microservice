const Complaint = require("../models/complaintModel")

const createComplaint = async(req, res) => {
  try{
    console.log(req.query);
    const complaint = new Complaint({
      user_id: req.query.user_id,
      ...req.body
    })
    await complaint.save()
    res.status(201).json({status:"success", msg: "Successfully created new complaint"})
  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const getComplaint = async(req, res) => {
  try {
    const complaint = req.query.complaint_id ? await Complaint.findOne({_id: req.query.complaint_id}) : await Complaint.find({user_id: req.query.user_id})
    if (!complaint) return res.status(404).json({status: "fail", msg: "Complaint not found"})
    return res.status(200).json(complaint)
  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const updateComplaint = async(req, res) => {
  try{
    const complaint = await Complaint.findByIdAndUpdate({_id: req.body._id}, req.body) // *
    if (!complaint) return res.status(404).json({status: "fail", msg: "Complaint not found"})
    res.status(200).json({status: "success", msg: "Update complaint successfully"})

  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const deleteComplaint = async(req, res) => {
  try{
    const complaint = await Complaint.findByIdAndDelete({_id: req.body._id})
    if (!complaint) return res.status(404).json({status: "fail", msg: "Complaint not found"})
    res.status(200).json({status: "success", msg: "Deleted complaint successfully"})
  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}



module.exports = { createComplaint, getComplaint, updateComplaint, deleteComplaint }