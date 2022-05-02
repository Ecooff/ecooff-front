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
// Close to expire
export const closeToExp = URL + "stock/closeToExp";
// For you (destacados)
export const forYou = URL + "stock/forYou";
// Get by user Id
export const getByUserId = URL + "orders/getByUserId";

// Cart
export const addToCart = URL + "cart/addToCart";

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
};

export default URLPath;
