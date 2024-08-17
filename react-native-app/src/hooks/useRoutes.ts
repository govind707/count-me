import { RouteParams } from "../navigation/routes";

const pathConfigMap: Record<keyof RouteParams, string> = {
  Dashboard: "/dashboard",
  Home: "/home",
  Registration: "/user-registration",
  Profile: "/profile",
  DashboardHome: "/dashboard-home",
  History: "/history",
  Login: "/login",
};

const {
  Dashboard,
  Home,
  Registration,
  DashboardHome,
  Profile,
  History,
  Login,
} = pathConfigMap;

const userRouteLinking = {
  config: {
    screens: {
      Dashboard,
      Home,
      Registration,
      DashboardHome,
      Profile,
      History,
      Login,
    },
  },
  prefixes: [""],
};

export const useRoutesLinking = () => {
  return userRouteLinking;
};
