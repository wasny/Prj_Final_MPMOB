<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <h1>Produtos Cadastrados</h1>
            </div>
        </v-app-bar>
        <v-simple-table>
            <thead>
                <tr>
                    <th class="text-left" style="width: 15%">Código</th>
                    <th class="text-left" style="width: 15%">Descrição</th>
                    <th class="text-left" style="width: 40%">Nome</th>
                    <th class="text-left" style="width: 10%">Preço</th>
                    <th class="text-left" style="width: 5%">Qtd</th>
                    <th class="text-left" style="width: 15%">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, indice) in cadastrados" :key="indice">
                    <td> {{c.codigo}}</td>
                    <td> {{c.descricao}}</td>
                    <td> {{c.nome}}</td>
                    <td> {{c.preco}}</td>
                    <td> {{c.qnt}}</td>
                    <td> {{c.total}}</td>
                </tr>
            </tbody>
        </v-simple-table>

        <v-col class="text-left">
            <v-btn to="/cadastro" text class="primary">Novo Cadastro</v-btn>
            <v-btn to="/" text class="primary">Home</v-btn>
        </v-col>
    </v-app>
</template>
<script>
export default {
    name: "App",

    components: {},

    data: () => ({
        cadastrados: [],
    }),

    methods: {
        readCad() {
            var listaDisc = JSON.parse(window.localStorage.getItem('listaCadastrados'));
            this.cadastrados = (listaDisc != null) ? listaDisc : [];
        },
    },
    beforeMount() {
        this.readCad();
    }
};
</script>