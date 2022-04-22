import axios from "axios";
import { URLPath } from "../services";

const CartService = {
  addToCart: async () => {
    return fetch(URLPath.addToCart, {
      method: "POST",
      headers: setHeader(),
      body: {
        length: true,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
  },
};

export default CartService;

function setHeader() {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjYxNzk1NzkxOTVkNDA2NGNmMzAwZmQiLCJpYXQiOjE2NTA1NjY1ODQsImV4cCI6MTY1MzE1ODU4NH0.VA04vxU0wq1OqMz9SB6G_4GzoM67-icx3gNaEbPedXY",
  };

  return headers;
}
