<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Início</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/cadastro" text>
        <span class="mr-2">Cadastro</span>
        <v-icon>mdi-dialpad</v-icon>
      </v-btn>

      <v-btn to="/cadastrados" text>
        <span class="mr-2">Cadastrados</span>
        <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
      </v-btn>

      <v-btn to="/sobre" text>
        <span class="mr-2">Sobre</span>
        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn a href="https://github.com/wasny/Prj_Final_MPMOB" text>
        <span class="mr-2">Projeto</span>
        <v-icon>mdi-domain</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
