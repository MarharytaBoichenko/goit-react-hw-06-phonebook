import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
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
import { contactReducer } from "./contacts-reducer";
import { filterReducer } from "./filter-reducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

///это то что будем  сохранять
const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
  //за  исключением  фильтра
};

//корневой reducer
const rootReducer = combineReducers({
  // contacts: persistReducer(contactsPersistConfig, contactReducer),
  contacts: contactReducer,
  filter: filterReducer,
});

//gthcbcnbv контакт ред  і его комбайнім в корневой -- НЕ работает так!
// const persistContRed = persistReducer(contactsPersistConfig, contactReducer);
// const rootReducer = combineReducers({
//   contacts: persistContRed,
//   filter: filterReducer,
// });

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
