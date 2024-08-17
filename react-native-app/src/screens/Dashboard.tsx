import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DashboardHome } from "../components/dashboard";
import { History } from "../components/dashboard/history";
import { Profile } from "../components/dashboard/profile";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          if (route.name === "Dashboard") {
            return (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={24}
                color="black"
              />
            );
          } else if (route.name === "History") {
            return (
              <MaterialCommunityIcons name="history" size={24} color="black" />
            );
          } else if (route.name === "Profile") {
            return <FontAwesome5 name="user-circle" size={24} color="black" />;
          }

          return (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={24}
              color="black"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardHome} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
