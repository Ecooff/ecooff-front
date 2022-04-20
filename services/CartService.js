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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjViNGY1NjZjOTVmNzIxNDUzMTFmMTkiLCJpYXQiOjE2NTAxNTEyODIsImV4cCI6MTY1Mjc0MzI4Mn0.LXH8J4gY5QM9H0_fXoarBqisxGiys5RlUrg7F4JR1Po',
  };

  return headers;
}
