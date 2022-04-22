import axios from "axios";
import { URLPath } from "../services";

const AdressService = {
  getUserAddresses: () => {
    const data = axios.get(URLPath.getUserAddresses, {
      headers: setHeader(),
    });
    return data;
  },
  addUserAdress: (props) => {
    const data = axios.post(URLPath.addUserAdress, props, {
      headers: setHeader(),
    });
    return data;
  },
  changeDefaultAdress: (adressID) => {
    const data = axios.put(
      URLPath.changeDefaultAdress + adressID,
      {},
      {
        headers: setHeader(),
      }
    );
    return data;
  },
};

export default AdressService;

function setHeader() {
  let headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjYxNzk1NzkxOTVkNDA2NGNmMzAwZmQiLCJpYXQiOjE2NTA1NjY1ODQsImV4cCI6MTY1MzE1ODU4NH0.VA04vxU0wq1OqMz9SB6G_4GzoM67-icx3gNaEbPedXY",
  };

  return headers;
}
