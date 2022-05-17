import axios from "axios";
import { URLPath } from "../services";

const AdressService = {
  getUserAddresses: (user) => {
    const data = axios.get(URLPath.getUserAddresses, {
      headers: setHeader(user.token),
    });
    return data;
  },
  addUserAdress: (props, user) => {
    const data = axios.post(URLPath.addUserAdress, props, {
      headers: setHeader(user.token),
    });
    return data;
  },
  changeDefaultAdress: (adressID, user) => {
    const data = axios.put(
      URLPath.changeDefaultAdress + adressID,
      {},
      {
        headers: setHeader(user.token),
      }
    );
    return data;
  },
};

export default AdressService;

function setHeader(token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };

  return headers;
}
