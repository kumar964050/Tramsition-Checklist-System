const router = require("express").Router();

const controller = require("../controllers/checklist.controller");
router.get("/", controller.evaluateChecklist);
module.exports = router;
