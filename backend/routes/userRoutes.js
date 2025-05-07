const express = require("express");
const router = express.Router();
const { getUsers, firstAPI } = require("../controllers/userController");

router.get("/", getUsers);
router.get("/firstAPI", firstAPI);

module.exports = router;
