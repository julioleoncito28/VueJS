<template>
  <v-app>
    <div id="Login">
      <h1>Inicio de Sesion</h1>

      <v-text-field v-model="username" name="username" label="Usuario">
      </v-text-field>
      <v-text-field v-model="password" name="password" label="Contraseña">
      </v-text-field>
      <v-btn primary large block v-on:click="login">LOGIN</v-btn>
      <br />
      <!---->
      <h3 v-show="errored" class="hideElement">
        El usuario y/o la contraseña es incorrecta.Intente nuevamente
      </h3>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errored: false,
    };
  },
  //el metodo on:click
  methods: {
    login: function () {
      console.log("Este es un click");
    },
  },
};
</script>

<style scoped>
#Login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #cccccc;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>