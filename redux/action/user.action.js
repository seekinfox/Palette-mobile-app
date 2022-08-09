import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../utils/utils";
import {_USER } from "../urls";

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

export const _getUsers = createAsyncThunk(
   '__get_users',
  async(accesskey)=> {
   try {
      const response = await get(_USER._GET_USERS, accesskey)
      return response

   } catch (error) {
      throw error
   }
  }
)