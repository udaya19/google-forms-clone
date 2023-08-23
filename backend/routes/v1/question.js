const router = require("express").Router();

const { addQuestion, addOptions } = require("../../controllers/question");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-question/:formId", isAuthenticated, addQuestion);
router.post("/add-option/:formId", isAuthenticated, addOptions);

module.exports = router;
