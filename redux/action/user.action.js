import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/utils";
import { BASE, _USER } from "../urls";
import axios from "axios"

export const signUp = createAsyncThunk(
   '__Signup',
   async(data) =>{
      try {
         const response = await post(_USER._REGISTER, data)
         return response
      } catch (error) {
         throw error         
      }
   }
)

export const _login = createAsyncThunk(
   '_login',
   async (data) => {
       try {
         const response = await post(_USER.LOGIN, data)
         return response
       } catch (err) {
         throw err
       }
   }
)