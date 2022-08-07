import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Login from "./screens/Login/Login";
import { Home, LoginStack } from "./routes/MainStack";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setisLogin } from "./redux/slice/authuntication.slice";
import { STORAGE_KEY } from "./utils/defaultText";

// import Navigator from "./routes/MainStack"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const AppContainer = ()=> {
  const dispatch = useDispatch()
  const {loaders, userLogged} = useSelector(state => state.authuntication)
  const [userMetaVerify, setUserMetaVerify] = useState({})

  const getData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      if(value !== null) {
        const parsedValue = JSON.parse(value)
        setUserMetaVerify({...parsedValue})
      } else {
        setUserMetaVerify({})
      }
    } catch(e) {
      // error reading value
    }
  }, [userLogged])

  useEffect(() => getData(), [])
  useEffect(() => {
    if(loaders.loginSuccess){
      getData()
    }
    if(!userLogged){
      getData()
    }
  }, [loaders.login, userLogged])
  
  useEffect(()=> {
    if(userMetaVerify?.accessToken){
      dispatch(setisLogin(true))
    }
  }, [getData, userMetaVerify])

  return (
    userMetaVerify.accessToken ? <Home /> : <Login />
      // <Home />
  )
}



export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppContainer  />
      </NativeBaseProvider>
    </Provider>
  );
}

{/* <Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "blueGray.50" }}
  px={4}
  flex={1}
>
  <Text>Wellcome palette</Text>
</Center>  */}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
