import axios from "axios";
import { URLPath } from "../services";

const CartService = {
  addToCart: async (user) => {
    console.log("TOKENUSER", user.token);
    return fetch(URLPath.addToCart, {
      method: "POST",
      headers: setHeader(user.token),
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

function setHeader(token) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + token,
  };

  return headers;
}
