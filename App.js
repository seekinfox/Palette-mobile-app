import React, { useEffect, useState } from "react";
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
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";

// import Navigator from "./routes/MainStack"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const AppContainer = ()=> {
  const {userLogged} = useSelector(state => state.authuntication)
  const [isLogged, setIsLogged] = useState(userLogged)
  
  useEffect(()=> {
    setIsLogged(userLogged)
  }, [userLogged])

  return (
      // isLogged ? <Home /> : <Login />
      <Home />
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
