const router = require("express").Router();

const { submitResponse } = require("../../controllers/response");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-response/:formId", isAuthenticated, submitResponse);

module.exports = router;
