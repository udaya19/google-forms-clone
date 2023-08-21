const router = require("express").Router();

const { registerUser, loginUser, profile } = require("../../controllers/user");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-user", registerUser);
router.post("/login", loginUser);
router.post("/profile", isAuthenticated, profile);

module.exports = router;
