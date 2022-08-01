const Profile = require("../../models/profileModel")

const registerProfile = async(req, res) => {
  try{
    const { name, birthday, roll } = req.body
    const duplicate = await Profile.findOne({name: name})
    if (duplicate) return res.status(400).json({status:"fail", msg: "Profile already exists"})
    Profile.save()
    res.status(201).json({status:"success", msg: "Successfully registered new profile"})

  } catch (e) {
    // console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const getProfile = async(req, res) => {
  try{
    const profile = await Profile.findOne({_id: req.body._id})
    if (!profile) return res.status(404).json({status: "fail", msg: "User not found"})
    return profile
    
  } catch (e) {
    // console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const updateProfile = async(req, res) => {
  try{
    const profile = Profile.findByIdAndUpdate({_id: req.body._id}, req.body)
    res.status(200).json({status: "success", msg: "Update user successfully"})

  } catch (e) {
    // console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const deleteProfile = async(req, res) => {
  try{
    const profile = Profile.findByIdAndDelete({_id: req.body._id})
    res.status(200).json({status: "success", msg: "Deleted profile successfully"})
  } catch (e) {
    // console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

module.exports = { registerProfile, getProfile, updateProfile, deleteProfile }