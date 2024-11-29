const checklistRules = [
  {
    id: 1,
    description: "Valuation Fee Paid",
    check: (data) => data.isValuationFeePaid === true,
  },
  {
    id: 2,
    description: "UK Resident",
    check: (data) => data.isUkResident === true,
  },
  {
    id: 3,
    description: "Risk Rating Medium",
    check: (data) => data.riskRating === "Medium",
  },
  {
    id: 4,
    description: "LTV Below 60%",
    check: (data) => Number(data.ltv.split("%")[0]) <= 60,
  },
  // we can add more rule here as well as a object
  // {
  //   id: 5,
  //   description: "description",
  //   check: (data) => true, //condition
  // },
];

module.exports = checklistRules;
