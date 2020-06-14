import AboutUs from "../containers/about-us"
import App from "../App"
import Error from "../containers/error"
import SignUp from "../containers/sign-up"
import Login from "../containers/login"
import UserProfile from "../containers/user-profile"
import Home from "../containers/home"


const routes = [
  {
    path: "/about-us",
    exact: true,
    component: AboutUs
  },
  {
    path: "/sign-up",
    exact: true,
    component: SignUp
  },
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/user-profile",
    exact: true,
    component: UserProfile
  },
  {
    path: "/",
    exact: true,
    component: App,
  },
  {
    path: "/*",
    component: Error,
  },
];

export default routes;