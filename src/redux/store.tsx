import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

// Import reducer here
import themeReducer from "./reducers/themeSlice";

const persistConfig = {
  key: "root",
  storage,
};

// If the reducers that need persist is more than one
const rootReducer = combineReducers({
  theme: themeReducer,
});

// for only one reducer needs persist, rootReducer can be replaced with the one reducer that needs it.
// it is recommended for future coding that it's saved in a root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persist: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions and paths where non-serializable values might exist for persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);