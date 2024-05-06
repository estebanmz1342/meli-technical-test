const Router = require("express");
const axios = require("axios");
const router = Router();
const { ITEMS_BASE_URL } = require("../globals.js");

router.get("/api/items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${ITEMS_BASE_URL}${id}`);
    const descriptionResponse = await axios.get(
      `${ITEMS_BASE_URL}${id}/description`
    );
    const { data, status } = await response;
    res.status(status).send({
      author: {
        name: "Juan Esteban",
        lastname: "Munoz Salazar",
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price.toString().split(".")[0],
          decimals: data.price.toString().split(".")[1],
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.initial_quantity,
        description: descriptionResponse.data.plain_text,
      },
    });
  } catch (error) {
    throw new Error("Error fetching item details or description" + error);
  }
});

module.exports = router;
