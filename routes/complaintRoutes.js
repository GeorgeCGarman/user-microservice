const express = require("express")
const { createComplaint, getComplaint, updateComplaint, deleteComplaint } = require("../controllers/complaintController")
const router = express.Router()

router.get("/", getComplaint)
router.post("/", createComplaint)
router.put("/", updateComplaint)
router.delete("/", deleteComplaint)

module.exports = router