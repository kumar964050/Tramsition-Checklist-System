const axios = require("axios");

/*
Fields
isUkResident : true,
isValuationFeePaid : true,
riskRating : "Medium",
ltv: "57.14%" // need to convert str to number
*/

module.exports = async () => {
  try {
    const url = process.env.API_URL;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error.message);
    throw new Error("Failed to fetch data");
  }
};
