<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Projeto Final de Modelagem e Desenvolvimento de Protótipo para
          Dispositivos Móveis</h1>
        <v-img :src="require('../assets/rdouro.png')" class="my-3" contain height="400" />
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>

export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>

