// Base url
const BASE_URI = "https://fakestoreapi.com";

// API query
const PRODUCT_QUERY = `products`;
const PRODUCT_CAT_QUERY = `${PRODUCT_QUERY}/category`;
const CATEGORY_QUERY = `${PRODUCT_QUERY}/categories`;
const CART_QUERY = `carts`;
const USER_QUERY = `users`;
const LOGIN_QUERY = `auth/login`;

export {
  BASE_URI,
  PRODUCT_CAT_QUERY,
  CATEGORY_QUERY,
  CART_QUERY,
  LOGIN_QUERY,
  PRODUCT_QUERY,
  USER_QUERY,
};
