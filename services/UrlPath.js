<<<<<<< HEAD
export const LOCALHOST = "http://localhost:3000/api/";
export const PROD = "http://192.168.100.1:3000/api/";
export const ANDROID_EMULATOR = "http://10.0.2.2:3000/api/"
=======
export const LOCALHOST = 'http://192.168.0.213:3000/api/users/';
export const PROD = 'http://192.168.0.213:3000/api/users/';
>>>>>>> aa38dd34f6d4063704a7b4825c58cdb1e90dfcac

export const URL = ANDROID_EMULATOR;

//Users
export const serverAlive = URL + "users/serverAlive";
export const login = URL + "users/authenticate";
export const signUp = URL + "users/register";

//Providers
export const getAllProviders = URL + "providers/";
// Close to expire
export const closeToExp = URL + "stock/closeToExp";
// For you (destacados)
export const forYou = URL + "stock/forYou";
// Get by user Id
export const getByUserId = URL + "orders/getByUserId";

const URLPath = {
  serverAlive,
  login,
  signUp,
  getAllProviders,
  closeToExp,
  forYou,
  getByUserId,
};

export default URLPath;
