
import Index from "views/Index.js";
import Ride from "views/examples/Ride.js";
import Routes from "views/examples/Routes.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Users from "views/examples/Users.js";
import Drivers from "views/examples/Drivers.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-chalkboard",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/drivers",
    name: "Drivers",
    icon: "fa fa-car ",
    component: Drivers,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users", 
    icon: "fas fa-users",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/routes",
    name: "Routes",
    icon: "fas fa-road",
    component: Routes,
    layout: "/admin"
  },
  {
    path: "/ride",
    name: "Rides", 
    icon: "fas fa-car",
    component: Ride,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Payments",
    icon: "	fas fa-money-bill-wave",
    component: Login,
    layout: "/auth"
  },{
    path: "/login",
    name: "Reports",
    icon: "fas fa-file",
    component: Login,
    layout: "/auth"
    
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;