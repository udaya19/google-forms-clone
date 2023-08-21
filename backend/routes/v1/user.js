const router = require("express").Router();

const { registerUser, loginUser } = require("../../controllers/user");

router.post("/new-user", registerUser);
router.post("/login", loginUser);

module.exports = router;
