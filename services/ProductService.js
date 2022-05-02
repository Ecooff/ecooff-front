import axios from "axios";
import { URLPath } from "../services";

const ProductService = {
  getAllProviders: async (user) => {
    console.log("UUSERR", user.token);
    const data = await axios.get(URLPath.getAllProviders, {
      headers: setHeader(user.token),
    });
    return data;
  },
  closeToExp: async (user) => {
    const data = axios.get(URLPath.closeToExp, {
      headers: setHeader(user.token),
    });
    return data;
  },
  forYou: async (user) => {
    const data = axios.get(URLPath.forYou, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getByUserId: (user) => {
    const data = axios.get(URLPath.getByUserId, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getBySorpresas: (user) => {
    const data = axios.get(URLPath.getBySorpresas, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getByCosmetica: (user) => {
    const data = axios.get(URLPath.getByCosmetica, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getByMercado: (user) => {
    console.log("USERMERCADO", user);
    const data = axios.get(URLPath.getByMercado, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getByFarmacia: (user) => {
    const data = axios.get(URLPath.getByFarmacia, {
      headers: setHeader(user.token),
    });
    return data;
  },
  getByProvSubcat: (providerId, subcategory, user) => {
    const data = axios.get(
      URLPath.getByProvSubcat + providerId + "/" + subcategory,
      {
        headers: setHeader(user.token),
      }
    );
    return data;
  },
};

export default ProductService;

function setHeader(token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return headers;
}
