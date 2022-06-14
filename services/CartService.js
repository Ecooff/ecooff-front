import axios from "axios";
import URLPath from "../services/UrlPath";

const CartService = {
  addToCart: (user, props) => {
    const data = axios.post(URLPath.addToCart, props, {
      headers: setHeader(user.token),
    });
    return data;
  },

  cartLength: (user) => {
    const data = axios.get(URLPath.cartLength, {
      headers: setHeader(user.token),
    });
    return data;
  },

  openCart: (user) => {
    const data = axios.get(URLPath.openCart, {
      headers: setHeader(user.token),
    });
    return data;
  },

  productLength: (user, id) => {
    const data = axios.get(URLPath.productLength + id, {
      headers: setHeader(user.token),
    });
    return data;
  },

  deleteItem: (user, id) => {
    const data = axios.put(
      URLPath.deleteItem + id,
      {},
      {
        headers: setHeader(user.token),
      }
    );
    return data;
  },
  deleteCart: (user, props) => {
    const data = axios.put(URLPath.deleteCart, props, {
      headers: setHeader(user.token),
    });
    return data;
  },
  confirmCart: async (user, props) => {
    const data = axios.post(URLPath.confirmCart, props, {
      headers: setHeader(user.token),
    });
    return data;
  },

  createOrder: async (user, address) => {
    const data = await axios.post(URLPath.createOrder, address, {
      headers: setHeader(user.token),
    });
    return data;
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
