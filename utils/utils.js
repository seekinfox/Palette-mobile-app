import AsyncStorage from "@react-native-async-storage/async-storage"

import axios from "axios"
import { BASE } from "../redux/urls"
import { STORAGE_KEY } from "./defaultText"

export const getuser = async(setAccessToken)=>{
   try {
      const response = await AsyncStorage.getItem(STORAGE_KEY)  
      // console.log(JSON.parse(response).accessToken, "%")
      setAccessToken(JSON.parse(response).accessToken)       
   } catch (error) {
   }
}


export const post = async(url, data, accessToken) =>{
   try {
      const response = await axios.post(`${BASE}${url}`, data, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
         }
      })
      return response
   } catch (error) {
      throw error
   }
}

export const get = async(url, accessToken) => {
   try {
      const response = await axios.get(`${BASE}${url}`, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
         }
      }) 
      return response

   } catch (error) {
      throw error
   }
}