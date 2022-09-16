<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Cadastro de Produtos</h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col offset-lg="2" lg="8" md="12">
            <v-row>

              <v-col cols="6">
                <v-text-field label="Código"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field label="Descrição"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Nome"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field label="Preço"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field label="Quantidade"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="text-left">
                <v-btn class="primary">Salvar</v-btn>
              </v-col>

              <v-col class="text-right">
                <v-btn to="/" text class="primary">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="text-center lighten-4 blue">
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
