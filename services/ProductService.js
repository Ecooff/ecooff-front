import axios from "axios";

const ProductService = {
    getAllProviders: async () => {
        const data =  await axios
            .get("http://192.168.100.66:3000/api/providers/", {
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM0ODRlOGM1ZDlkMTMyNzRjYTA4MGIiLCJpYXQiOjE2NDc2MDkxMDUsImV4cCI6MTY1MDIwMTEwNX0.goQl1VYkpeyTnMZE7ZFZoxhI1_iAQ52gr4YV28eZeKk",
              },
            })
            return data;
},
    closeToExp: () => {
        const data = axios.get("http://localhost:3000/api/stock/closeToExp", {
          headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM0ODRlOGM1ZDlkMTMyNzRjYTA4MGIiLCJpYXQiOjE2NDc2MDkxMDUsImV4cCI6MTY1MDIwMTEwNX0.goQl1VYkpeyTnMZE7ZFZoxhI1_iAQ52gr4YV28eZeKk",
            },
        })
        return data;
},
    forYou: () => {
      const data = axios.get("http://localhost:3000/api/stock/forYou", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM0ODRlOGM1ZDlkMTMyNzRjYTA4MGIiLCJpYXQiOjE2NDc2MDkxMDUsImV4cCI6MTY1MDIwMTEwNX0.goQl1VYkpeyTnMZE7ZFZoxhI1_iAQ52gr4YV28eZeKk",
        },
      })
      return data;
},
    getByUserId: () => {
      const data = axios.get("http://localhost:3000/api/orders/getByUserId", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjM0ODRlOGM1ZDlkMTMyNzRjYTA4MGIiLCJpYXQiOjE2NDc2MDkxMDUsImV4cCI6MTY1MDIwMTEwNX0.goQl1VYkpeyTnMZE7ZFZoxhI1_iAQ52gr4YV28eZeKk",
        },
      })
      return data;
    }
}

export default ProductService




// function setHeader(token) {

//     let headers = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     }

//     return headers

// }
