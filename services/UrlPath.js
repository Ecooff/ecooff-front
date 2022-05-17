export const LOCALHOST = "http://localhost:3000/api/";
export const PROD = "https://ecooff.herokuapp.com/api/";
// export const PROD = "http://192.168.100.1:3000/api/";
export const ANDROID_EMULATOR = "http://10.0.2.2:3000/api/";
export const IP_LOCALHOST_VALEN = "http://192.168.100.225:80/api/"; // ip cafeteria
export const IP_LOCALHOST_TOBI = "http://192.168.1.4:3000/api/"; // ip cafeteria

export const URL = PROD;

//Users
export const serverAlive = URL + "users/serverAlive";
export const login = URL + "users/authenticate";
export const signUp = URL + "users/register";
export const validateUser = URL + "users/verifyEmail";

//Providers
export const getAllProviders = URL + "providers/";

// STOCK
export const closeToExp = URL + "stock/closeToExp";
export const forYou = URL + "stock/forYou";
export const getByCategory = URL + "stock/getByCategory/";
export const getBySubcategory = URL + "stock//getBySubcategory/";
export const getByProvSubcat = URL + "stock/getByProvSubcat/";
export const getByProv = URL + "stock/getByProvider/";
export const partialMatch = URL + "stock/partialMatch";

// Get by user Id
export const getByUserId = URL + "orders/getByUserId";

// Cart
export const addToCart = URL + "cart/addToCart";
export const cartLength = URL + "cart/cartLength";
export const openCart = URL + "cart/openCart";
export const productLength = URL + "cart/productLength/";
export const deleteItem = URL + "cart/deleteItem/";
export const confirmCart = URL + "cart/confirmCart";

// Orders
export const listOfOrders = URL + "orders/listOfOrders";
export const orderById = URL + "orders/openOrder/";

//Get User Adresses
export const getUserAddresses = URL + "users/getUserAddresses";

// Add user Adress
export const addUserAdress = URL + "users/addAddress";

// Change default adress
export const changeDefaultAdress = URL + "users/changeDefaultAddress/";

const URLPath = {
  serverAlive,
  login,
  signUp,
  getAllProviders,
  closeToExp,
  forYou,
  getByUserId,
  addToCart,
  getByCategory,
  getBySubcategory,
  getByProvSubcat,
  getUserAddresses,
  addUserAdress,
  changeDefaultAdress,
  validateUser,
  cartLength,
  openCart,
  partialMatch,
  getByProv,
  productLength,
  deleteItem,
  listOfOrders,
  orderById,
  confirmCart,
};

export default URLPath;
