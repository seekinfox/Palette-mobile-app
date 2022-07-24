import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   loaders: {

   },
   user: {
      email: '',
      password: ''
   },
   userLogged: false,

}

const authuntication = createSlice({
   name: 'authuntication',
   initialState,
   reducers: {
      setisLogin:(state, action) => {
         state.userLogged = action.payload
      }
   },
   extraReducers: (builder) => {

   }
})

export const {
   setisLogin,
} = authuntication.actions

export default authuntication