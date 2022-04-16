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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM0ODQ0Y2M1ZDlkMTMyNzRjYTA4MDMiLCJpYXQiOjE2NDk4NzEwNzgsImV4cCI6MTY1MjQ2MzA3OH0.u42zLZXxvbQT7AnI8XVcYBFHs86jIwcsGPLoFiubQOU',
  };

  return headers;
}
