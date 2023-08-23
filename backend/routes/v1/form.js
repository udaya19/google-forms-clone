const router = require("express").Router();

const {
  addForm,
  updateFormTitle,
  updateFormDescription,
  getFormById,
} = require("../../controllers/form");

const { isAuthenticated } = require("../../middleware/auth");

router.post("/new-form", isAuthenticated, addForm);
router.post("/:id", isAuthenticated, getFormById);
router.post("/update-title/:id", isAuthenticated, updateFormTitle);
router.post("/update-description/:id", isAuthenticated, updateFormDescription);

module.exports = router;
