import Home from "../container/Home";
import Login from "../container/Login";

export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
}

export interface IRoute {
  name: string;
  path: RoutePath;
  component: React.ComponentType;
}

export const routes: IRoute[] = [
  {
    name: "login",
    path: RoutePath.LOGIN,
    component: Login,
  },
  {
    name: "home",
    path: RoutePath.HOME,
    component: Home,
  },
];
