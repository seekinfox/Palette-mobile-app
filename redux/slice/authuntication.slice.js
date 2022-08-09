import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from "@reduxjs/toolkit";
import { education, experience, interests } from "../../utils/defaultLists";
import { STORAGE_KEY } from '../../utils/defaultText';
import { signUp, _getUsers, _login } from "../action/user.action";
const initialState = {
   loaders: {
      signup: false,
      signUpFailure: false,
      signUpSuccess: false,
      login: false,
      loginSuccess: false,
      loginFailure: false,

      getUsers: false,
      getUserSuccess: false ,
      getUserFailure: false
   },
   metaData: undefined,
   user: {
      email: '',
      password: ''
   },
   signUpInputs:{
      email: '',
      password: ''
   },
   userLogged: false,
   userDeatils: {
      url: '',
      username: "User name",
      gender: 'male',
      age: 24, 
      education: education,
      workEperience: experience,
      intrestes: interests,
      social: []
   },
   Assignees: undefined,
}

const authuntication = createSlice({
   name: 'authuntication',
   initialState,
   reducers: {
      setisLogin:(state, action) => {
         state.userLogged = action.payload
      },
      setSignupInputs:(state, action) => {
         state.signUpInputs.email = action?.payload?.email
         state.signUpInputs.password = action?.payload?.password
      },
      resetSignup:(state) =>{
         state.signUp = state.signUpFailure = state.signUpSuccess = false
      },
      resetLogin:(state) => {
         state.login = false;
         state.loginSuccess = false;
         state.loginFailure = false 
      }
   },
   extraReducers: (builder) => {
      builder.addCase(signUp.pending, (state)=>{
         state.loaders.signup = true;
         state.loaders.signUpFailure = state.loaders.signUpSuccess = false;
      })
      builder.addCase(signUp.fulfilled, (state, {payload})=>{
         state.loaders.signUpSuccess = true;
         state.loaders.signUpFailure = state.loaders.signup = false;
      })
      builder.addCase(signUp.rejected, (state, action)=>{
         state.loaders.signUpFailure = true;
         state.loaders.signup = state.loaders.signUpSuccess = false;
      });


      builder.addCase(_login.pending, (state)=>{
         state.loaders.login = true;
         state.loaders.loginFailure = state.loaders.loginSuccess = false;
      })
      builder.addCase(_login.fulfilled, (state, {payload})=>{
         state.loaders.loginSuccess = true;
         state.loaders.loginFailure = state.loaders.login = false;
         state.user = {
            isAuthunticated: true,
            ...payload.data.userFound
         }
         state.metaData = {
            accessToken: payload.data.token,
            user: { ...state.user}
         }
         if(state.metaData){
            (async()=> {
               try {
                  const jsonValue = JSON.stringify(state.metaData)
                  await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
               } catch (error) {
                  console.log(error)
               }
            })()
         }       
      })
      builder.addCase(_login.rejected, (state, action)=>{
         state.loaders.loginFailure =true;
         state.loaders.login = state.loaders.loginSuccess = false;
      });

      builder
      .addCase(_getUsers.pending, (state)=>{
         state.loaders.getUsers = true;
         state.loaders.getUserSuccess = state.loaders.getUserFailure = false
      })
      .addCase(_getUsers.fulfilled, (state, {payload})=>{
         state.loaders.getUserSuccess = true;
         state.loaders.getUsers = state.loaders.getUserFailure = false
         state.Assignees = payload.data.allUsers
      })
      .addCase(_getUsers.rejected, (state, action)=>{
         
         state.loaders.getUserFailure = true;
         state.loaders.getUserSuccess = state.loaders.getUsers = false
      })
   }
})

export const {
   setisLogin,
   setSignupInputs,
   resetLogin,
   resetSignup,
} = authuntication.actions

export default authuntication