import axios from "axios";
import URLPath from "../services/UrlPath";


const AuthService = {

  login: (user) => {
    return fetch(URLPath.login, {
      method: "POST",
      headers: setHeader(user.token),
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
  },

  signUp: (newUser) => {
    return fetch(URLPath.signUp, {
      method: "POST",
      headers: setHeader(),
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
  },

  validateUser: (token) => {
    return fetch(URLPath.validateUser, {
      method: "POST",
      headers: setHeader(),
      body: JSON.stringify(token),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
  },

  editName: (user, props) => {
    const data = axios.put(URLPath.editName, props, {
      headers: setHeader(user.token),
    });
    return data;
  },

  retrieveUser: (token) => {

    const data = axios.get(URLPath.retrieveUser, {
      headers: setHeader(token),
    });
    return data;
  }

}

export default AuthService;

function setHeader(token) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return headers;
}
