const Profile = require("../../models/profileModel")

const registerProfile = async(req, res) => {
  try{
    const { name, birthday, roll } = req.body
    const duplicate = await Profile.findOne({name: name})
    if (duplicate) return res.status(400).json({message: "profile already exists"})
    Profile.save()
    return res.status(201).json({message: "successfully registered new profile"})

  } catch (e) {
    // console.log("Error from route: "+e)
    res.status(500).json({
        status: "fail",
        msg:"Internal Server Error"
    })
  }
}

// const getProfile = async