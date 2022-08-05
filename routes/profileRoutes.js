const express = require("express")
const { registerProfile, getProfile, updateProfile, deleteProfile } = require("../controllers/profileController")
const router = express.Router()

router.get("/profile", getProfile)
router.post("/profile", registerProfile)
router.put("/profile", updateProfile)
router.delete("/profile", deleteProfile)

module.exports = router