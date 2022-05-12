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
// Close to expire
export const closeToExp = URL + "stock/closeToExp";
// For you (destacados)
export const forYou = URL + "stock/forYou";
// Get by sorpresas
export const getBySorpresas = URL + "stock/getByCategory/Sorpresas";
// Get by cosmetica
export const getByCosmetica = URL + "stock/getByCategory/Cosmetica";
// Get by mercado
export const getByMercado = URL + "stock/getByCategory/Mercado";
//Get by Farmacia
export const getByFarmacia = URL + "stock/getByCategory/Farmacia";
//Get provider by subcat
export const getByProvSubcat = URL + "stock/getByProvSubcat/";
//Get provider Provider
export const getByProv = URL + "stock/getByProvider/";
// Search
export const partialMatch = URL + "stock/partialMatch";

// Get by user Id
export const getByUserId = URL + "orders/getByUserId";

// Cart
export const addToCart = URL + "cart/addToCart";
export const cartLength = URL + "cart/cartLength";
export const openCart = URL + "cart/openCart";
export const productLength = URL + "cart/productLength/";
export const deleteItem = URL + "cart/deleteItem/";

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
  getBySorpresas,
  getByCosmetica,
  getByMercado,
  getByFarmacia,
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
};

export default URLPath;
