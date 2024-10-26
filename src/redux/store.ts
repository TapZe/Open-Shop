import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/query";

// Import reducer here
import themeReducer from "./reducers/themeSlice";
import userReducer from "./reducers/user/userSlice";
import wishListReducer from "./reducers/wishListSlice";
import productQuantityReducer from "./reducers/product/productQuantitySlice";
import { productApi } from "./reducers/product/productFetchAPI";
import { userLoginApi } from "./reducers/user/userLoginAPI";
import { productCategoryApi } from "./reducers/product/productCatFetchAPI";
import { userApi } from "./reducers/user/userAPI";

const persistConfig = {
  key: "root",
  storage,
};

// If the reducers that need persist is more than one
const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  wishList: wishListReducer,
  productQuantity:  productQuantityReducer,
});

// for only one reducer needs persist, rootReducer can be replaced with the one reducer that needs it.
// it is recommended for future coding that it's saved in a root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
    [productApi.reducerPath]: productApi.reducer,
    [productCategoryApi.reducerPath]: productCategoryApi.reducer,
    [userLoginApi.reducerPath]: userLoginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware)
      .concat(productCategoryApi.middleware)
      .concat(userLoginApi.middleware)
      .concat(userApi.middleware),
});

// Setup persistor
export const persistor = persistStore(store);

// Type Export
export type RootState = ReturnType<typeof store.getState>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
