const Rating = require("../models/ratingModel")

const createRating = async(req, res) => {
  try{
    console.log(req.body)
    const { user_id, target_id, stars, comment } = req.body
    const duplicate = await Profile.findOne({user_id: user_id, target_id: target_id})
    console.log(duplicate)
    if (duplicate) return res.status(400).json({status:"fail", msg: "Rating already exists"})
    const rating = new Rating({
      user_id: user_id,
      target_id: target_id,
      stars: stars,
      comment: comment
    })
    await rating.save()
    res.status(201).json({status:"success", msg: "Successfully created new rating"})

  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const getRating = async(req, res) => {
  try{
    const {user_id, target_id} = req.body
    const rating = await Rating.findOne({user_id: user_id, target_id: target_id})
    if (!rating) return res.status(404).json({status: "fail", msg: "Profile not found"})
    return res.status(200).json(rating)
  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const updateRating = async(req, res) => {
  try{
    const rating = await Rating.findByIdAndUpdate({user_id: user_id, target_id: target_id}, req.body) // *
    if (!rating) return res.status(404).json({status: "fail", msg: "Profile not found"})
    res.status(200).json({status: "success", msg: "Update user successfully"})

  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

const deleteRating = async(req, res) => {
  try{
    const profile = await Profile.findByIdAndDelete({_id: req.body._id})
    if (!profile) return res.status(404).json({status: "fail", msg: "Profile not found"})
    res.status(200).json({status: "success", msg: "Deleted profile successfully"})
  } catch (e) {
    console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

module.exports = { registerProfile, getProfile, updateProfile, deleteProfile }