import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { useRoutesLinking } from "../hooks/useRoutes";
import { Registeration } from "../screens/Registration";
import Dashboard from "../screens/Dashboard";
import { Login } from "../screens/Login";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const navigationRef = React.useRef(null);
  const linking = useRoutesLinking();

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Registeration} name="Registration" />
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen component={Login} name="Login" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
