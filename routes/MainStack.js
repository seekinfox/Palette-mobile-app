import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import Login from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';
import Todo from '../screens/Todo/Todo';


const MainStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

export const LoginStack =()=> {

   return (
      <NavigationContainer>
         <MainStack.Navigator>
            <MainStack.Screen 
               name='Login' 
               component={Login}
               options={{
                  headerShadowVisible: false,
                  title: ''
               }}    
            />
         </MainStack.Navigator>
      </NavigationContainer>
   )
}

export const Home = () => {
   return (
      <NavigationContainer>
         <MainStack.Navigator>
            <MainStack.Screen 
               name='Todo' 
               component={Todo}
               options={{
                  headerShadowVisible: false,
                  title: 'Todo'
               }}    
            />
            <MainStack.Screen
               name='Profile'
               component={Profile}
               options={{
                  headerShadowVisible: false,
                  title: 'profile'
               }}
            />
         </MainStack.Navigator>
      </NavigationContainer>
   )
}