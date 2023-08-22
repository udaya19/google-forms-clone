exports.findById = async (Model, id) => {
  try {
    const obj = await Model.findById(id);
    if (!obj) {
      return res
        .status(404)
        .json({ success: false, error: `${Model} not found` });
    }
    return obj;
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
