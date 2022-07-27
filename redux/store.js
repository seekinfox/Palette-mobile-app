import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authuntication from "./slice/authuntication.slice";
import todo from "./slice/todo.slice";

const reducer = combineReducers({
   authuntication: authuntication.reducer,
   todo: todo.reducer,

})
export const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   })
})