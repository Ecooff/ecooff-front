import axios from "axios";
import { URLPath } from "../services";

const ProductService = {

  getAllProviders: async (user) => {
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

  getByProvider: (user, providerId) => {
    const data = axios.get(
      URLPath.getByProv + providerId,
      {
        headers: setHeader(user.token),
      }
    );
    return data;
  },

  queryPartialMatch: (user, name, category, subcategory, providerId) => {

    let URL = URLPath.partialMatch + "?name=" + name;

    category != null ? URL = URL.concat('&category=', category) : null;
    subcategory != null ? URL = URL.concat('&subcategory=', subcategory) : null;
    providerId != null ? URL = URL.concat('&providerId=', providerId) : null;

    console.log(URL);

    const data = axios.get(
      URL,
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
