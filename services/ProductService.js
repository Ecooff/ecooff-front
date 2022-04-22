import axios from "axios";
import { URLPath } from "../services";

const ProductService = {
  getAllProviders: async () => {
    const data = await axios.get(URLPath.getAllProviders, {
      headers: setHeader(),
    });
    return data;
  },
  closeToExp: () => {
    const data = axios.get(URLPath.closeToExp, {
      headers: setHeader(),
    });
    return data;
  },
  forYou: () => {
    const data = axios.get(URLPath.forYou, {
      headers: setHeader(),
    });
    return data;
  },
  getByUserId: () => {
    const data = axios.get(URLPath.getByUserId, {
      headers: setHeader(),
    });
    return data;
  },
  getBySorpresas: () => {
    const data = axios.get(URLPath.getBySorpresas, {
      headers: setHeader(),
    });
    return data;
  },
  getByCosmetica: () => {
    const data = axios.get(URLPath.getByCosmetica, {
      headers: setHeader(),
    });
    return data;
  },
  getByMercado: () => {
    const data = axios.get(URLPath.getByMercado, {
      headers: setHeader(),
    });
    return data;
  },
  getByFarmacia: () => {
    const data = axios.get(URLPath.getByFarmacia, {
      headers: setHeader(),
    });
    return data;
  },
  getByProvSubcat: (providerId, subcategory) => {
    const data = axios.get(
      URLPath.getByProvSubcat + providerId + "/" + subcategory,
      {
        headers: setHeader(),
      }
    );
    return data;
  },
};

export default ProductService;

function setHeader() {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjYxNzk1NzkxOTVkNDA2NGNmMzAwZmQiLCJpYXQiOjE2NTA1NjY1ODQsImV4cCI6MTY1MzE1ODU4NH0.VA04vxU0wq1OqMz9SB6G_4GzoM67-icx3gNaEbPedXY",
  };

  return headers;
}
