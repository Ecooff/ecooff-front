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
};

export default ProductService;

function setHeader() {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM4OGJmODBiMWM0MzNmMzg2N2FhYTgiLCJpYXQiOjE2NDc4NzQ3NDEsImV4cCI6MTY1MDQ2Njc0MX0.AG4CxD6IvaFxFmdxBkHPwiLE0Ku_40aZmDc_YV3W0Oc",
  };

  return headers;
}
