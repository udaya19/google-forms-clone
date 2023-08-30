const router = require("express").Router();

const upload = require("../utils/multer");

router.use("/api/v1/user", upload.none(), require("./v1/user"));
router.use("/api/v1/form", upload.none(), require("./v1/form"));
router.use("/api/v1/question", upload.none(), require("./v1/question"));
router.use("/api/v1/responses", require("./v1/response"));

module.exports = router;
