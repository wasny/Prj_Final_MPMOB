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
                <v-text-field v-model="cadastro.codigo" label="Código"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field v-model="cadastro.descricao" label="Descrição"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="cadastro.nome" label="Nome"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field v-model="cadastro.preco" label="Preço"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field v-model="cadastro.qnt" label="Quantidade"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="text-left">
                <v-btn class="primary" @click="salvarCadastro">Salvar</v-btn>
              </v-col>

              <v-col class="text-left">
                <v-btn to="/" text class="primary">Cancelar</v-btn>
              </v-col>

              <v-col class="text-right">
                <v-btn to="/cadastrados" text class="primary">Cadastrados</v-btn>
              </v-col>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    cadastro: {
      codigo: "",
      descricao: "",
      nome: "",
      preco: "",
      qnt: "",
      total: "",
    },
    cadastrados: [],
  }),
  methods: {

    soma() {
      let s = this.cadastro.preco * this.cadastro.qnt;
      this.cadastro.total = s;
    },

    addLocal() {
      window.localStorage.setItem('listaCadastrados', JSON.stringify(this.cadastrados));
    },

    readCad() {
      var listaDisc = JSON.parse(window.localStorage.getItem('listaCadastrados'));
      this.cadastrados = (listaDisc != null) ? listaDisc : [];
    },

    limpaCadastro() {
      this.cadastro = {
        codigo: "",
        descricao: "",
        nome: "",
        preco: "",
        qnt: "",
      };
    },

    salvarCadastro() {
      if (this.cadastro != null) {
        this.soma();
        this.cadastrados.push(this.cadastro);
        this.addLocal();
        this.limpaCadastro();

      }
    },
  }
};
</script>
