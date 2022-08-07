import axios from "axios"
import { BASE } from "../redux/urls"


export const post = async(url, data) =>{
   try {
      const response = await axios.post(`${BASE}${url}`, data, {
         headers: { 
            'Content-Type': 'application/json', 
            
          },
      })
      return response
   } catch (error) {
      throw error
   }
}