const router = require("express").Router();

const { registerUser } = require("../../controllers/user");

router.post("/new-user", registerUser);

module.exports = router;
