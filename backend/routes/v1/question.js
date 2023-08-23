const router = require("express").Router();

const { addQuestion } = require("../../controllers/question");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-question/:formId", isAuthenticated, addQuestion);

module.exports = router;
