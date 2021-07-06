import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import Register from "../components/Register.vue";
import Customer from "../components/Customer.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

//voy a usar Router
Vue.use(Router);
Vue.use(Vuetify);

//Definiendo las rutas de nuestra aplicacion
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },

    {
      path: "/logout",
      name: "logout",
      component: Login
    },
    //dasboard con nuestro menu de opciones
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "dashboard/register",
          name: "register",
          component: Register
        },

        {
          path: "dashboard/customer",
          name: "customer",
          component: Customer
        }
      ]
    }
  ]
});
