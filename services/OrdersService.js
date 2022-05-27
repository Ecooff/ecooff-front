import axios from "axios";
import URLPath from "../services/UrlPath";

const OrdersService = {

  getListOfOrders: async (user) => {
    const data = await axios.get(URLPath.listOfOrders, {
      headers: setHeader(user.token),
    });
    return data;
  },

  getOrderById: async (user, id) => {
    const data = await axios.get(URLPath.orderById + id, {
      headers: setHeader(user.token),
    });
    return data;
  }

};

export default OrdersService;

function setHeader(token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return headers;
}
