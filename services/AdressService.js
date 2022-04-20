import axios from 'axios';
import { URLPath } from '../services';

const AdressService = {
    getUserAddresses: () => {
        const data = axios.get(URLPath.getUserAddresses, {
            headers: setHeader()
        })
        return data;
    },
    addUserAdress: (props) => {
        const data = axios.post(URLPath.addUserAdress, props, {
            headers: setHeader()
        })
        return data;
    },
    changeDefaultAdress: (adressID) => {
        const data = axios.put(URLPath.changeDefaultAdress, adressID, {
            headers: setHeader()
        })
        return data;
    }
};

export default AdressService;

function setHeader() {
  let headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjViNGY1NjZjOTVmNzIxNDUzMTFmMTkiLCJpYXQiOjE2NTAxNTEyODIsImV4cCI6MTY1Mjc0MzI4Mn0.LXH8J4gY5QM9H0_fXoarBqisxGiys5RlUrg7F4JR1Po',
  };

  return headers;
}
