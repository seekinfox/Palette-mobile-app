import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../utils/utils";
import {_TODO } from "../urls";


export const getTodos = createAsyncThunk(
   'get__todos',
   async(token)=>{
      try {
         const response = await get(_TODO._GET_TODO, token)
         return response
      } catch (error) {
         throw error         
      }
   }
)

// export const _createTodo = createAsyncThunk(
//    'create__todo',
//    async(data, token)=>{
//       console.log(data, '-----------%')
//       try {
//          const response = await post(_TODO._CREATE, data, token)
//          return response         
//       } catch (error) {
//          throw error
//       }
//    }
// )

export const _createTodo = createAsyncThunk(
   '__create_todos',
  async({data , accesskey})=> {
   try {
      const response = await post(_TODO._CREATE, data, accesskey)
      return response

   } catch (error) {
      throw error
   }
  }
)