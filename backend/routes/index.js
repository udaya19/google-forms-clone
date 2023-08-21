const router = require("express").Router();

const upload = require("../utils/multer");

router.use("/api/v1/user", upload.none(), require("./v1/user"));

module.exports = router;