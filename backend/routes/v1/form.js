const router = require("express").Router();

const { addForm } = require("../../controllers/form");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-form", isAuthenticated, addForm);

module.exports = router;
