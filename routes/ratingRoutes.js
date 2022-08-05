const express = require("express")
const { createRating, getRating, updateRating, deleteRating } = require("../controllers/ratingController")
const router = express.Router()

router.get("/", getRating)
router.post("/", createRating)
router.put("/", updateRating)
router.delete("/", deleteRating)

module.exports = router