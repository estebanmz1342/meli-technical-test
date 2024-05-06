const Router = require("express");
const axios = require("axios");
const router = Router();
const { HOME_BASE_URL } = require("../globals.js");

router.get("/api/items", async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`${HOME_BASE_URL}${q}`);
    const { data, status } = await response;
    res.status(status).send({
      author: {
        name: "Juan Esteban",
        lastname: "Munoz Salazar",
      },
      categories: data.available_filters
        .find((filter) => filter.id == "category")
        ?.values?.sort((a, b) => b.results - a.results)
        .map((categories) => categories.name),
      items: data.results.slice(0, 4).map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price.toString().split(".")[0],
            decimals: item.price.toString().split(".")[1],
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      }),
    });
  } catch (error) {
    throw new Error("Error fetching search value" + error);
  }
});

module.exports = router;
