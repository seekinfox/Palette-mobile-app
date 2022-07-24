import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authuntication from "./slice/authuntication.slice";

const reducer = combineReducers({
   authuntication: authuntication.reducer,

})
export const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   })
})