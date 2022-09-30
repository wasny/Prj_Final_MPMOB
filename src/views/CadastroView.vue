<template>



  <v-container>
    <v-row class="text-center">
      <v-col offset-lg="2" lg="8" md="12">
        <v-row>

          <v-col cols="6">
            <v-text-field v-model="cadastro.codigo" label="Código" required></v-text-field>
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

          <v-col class="text-center">
            <v-btn class="ma-2" outlined color="black" @click="salvarCadastro" small>
              Salvar
            </v-btn>
          </v-col>

          <v-col class="text-center">
            <v-btn class="ma-2" outlined to="/" small>Cancelar</v-btn>
          </v-col>

          <v-col class="text-center">
            <v-btn class="ma-2" outlined to="cadastrados" small>Cadastrados</v-btn>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-container>

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
      this.cadastrados = (window.localStorage.getItem('listaCadastrados') != null) ? JSON.parse(window.localStorage.getItem('listaCadastrados')) : [];
      this.cadastrados.push(this.cadastro);
      window.localStorage.setItem('listaCadastrados', JSON.stringify(this.cadastrados));
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
        this.addLocal();
        this.limpaCadastro();
      }
    },
  }
};
</script>
