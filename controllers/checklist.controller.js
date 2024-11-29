const fetchData = require("../services/api.service");
const checklistRules = require("../rules/checklist.rules");

exports.evaluateChecklist = async (req, res) => {
  try {
    const data = await fetchData();
    const results = checklistRules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      status: rule.check(data) ? "Passed" : "Failed",
    }));
    res.render("dashboard", { results });
  } catch (error) {
    res.status(500).send("Error processing checklist");
  }
};
