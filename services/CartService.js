import axios from 'axios';
import { URLPath } from '../services';

const CartService = {
  addToCart: async () => {
    return fetch(URLPath.addToCart, {
      method: 'POST',
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
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM4OGJmODBiMWM0MzNmMzg2N2FhYTgiLCJpYXQiOjE2NDc4NzQ3NDEsImV4cCI6MTY1MDQ2Njc0MX0.AG4CxD6IvaFxFmdxBkHPwiLE0Ku_40aZmDc_YV3W0Oc',
  };

  return headers;
}
