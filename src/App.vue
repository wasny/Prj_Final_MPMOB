<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Produtos</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-img src="./assets/logo-unisales.png" class="pt-5 text-center">

      </v-img>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="grey--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cadastro">
            <v-list-item-title>Cadastro</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cadastrados">
            <v-list-item-title>Cadastrados</v-list-item-title>
          </v-list-item>

          <v-list-item to="/sobre">
            <v-list-item-title>Sobre</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>


    <router-view />


  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
};
</script>
