const Profile = require("../models/profileModel")

const registerProfile = async (req, res) => {
  try {
    const duplicate = await Profile.findOne({
      name: fullNameToName(req.body.name),
    }) // *
    console.log("duplicate :>> ", duplicate)
    console.log(duplicate)
    if (duplicate)
      return res
        .status(400)
        .json({ status: "fail", msg: "Profile already exists" })
    const { birthday, role } = req.body
    const profile = new Profile({
      birthday,
      role,
      mode: true,
    })
    profile.name = name
    await profile.save()
    res
      .status(201)
      .json({ status: "success", msg: "Successfully registered new profile" })
  } catch (e) {
    console.log("Error from route: " + e)
    res.status(500).json({
      status: "fail",
      msg: "Internal Server Error",
    })
  }
}

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ _id: req.body._id })
    if (!profile)
      return res.status(404).json({ status: "fail", msg: "Profile not found" })
    return res.status(200).json(profile)
  } catch (e) {
    console.log("Error from route: " + e)
    res.status(500).json({
      status: "fail",
      msg: "Internal Server Error",
    })
  }
}

const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    )
    if (!profile)
      return res.status(404).json({ status: "fail", msg: "Profile not found" })
    res.status(200).json({ status: "success", msg: "Update user successfully" })
  } catch (e) {
    console.log("Error from route: " + e)
    res.status(500).json({
      status: "fail",
      msg: "Internal Server Error",
    })
  }
}

const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      { _id: req.body._id },
      { mode: false }
    )
    if (!profile)
      return res.status(404).json({ status: "fail", msg: "Profile not found" })
    res
      .status(200)
      .json({ status: "success", msg: "Deleted profile successfully" })
  } catch (e) {
    console.log("Error from route: " + e)
    res.status(500).json({
      status: "fail",
      msg: "Internal Server Error",
    })
  }
}

function fullNameToName(fullName) {
  const name = { first: "", last: "" }
  name.first = fullName.substr(0, fullName.indexOf(" "))
  name.last = fullName.substr(fullName.indexOf(" ") + 1)
  return name
}

module.exports = { registerProfile, getProfile, updateProfile, deleteProfile }
