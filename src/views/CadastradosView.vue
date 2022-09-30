<template>
    <v-container>
        <v-simple-table>
            <thead>
                <tr>
                    <th class="text-left" style="width: 15%">Código</th>
                    <th class="text-left" style="width: 15%">Descrição</th>
                    <th class="text-left" style="width: 20%">Nome</th>
                    <th class="text-left" style="width: 10%">Preço</th>
                    <th class="text-left" style="width: 5%">Qtd</th>
                    <th class="text-left" style="width: 15%">Total</th>
                    <th class="text-center" style="width: 15%"> Ações</th>
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
                    <td>
                        <v-btn @click="abrirEdicao(indice)" color="#2E4053" fab small dark>
                            <v-icon>{{ icons.mdiPencil }}</v-icon>
                        </v-btn>
                        <v-btn @click="excluirProduto(indice)" color=" red" fab small dark>
                            <v-icon>{{ icons.mdiDelete }}</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>

        <v-col class="text-left">
            <v-btn class="ma-2" outlined to="/cadastro">Novo Cadastro</v-btn> &nbsp;
            <v-btn class="ma-2" outlined to="/">Home</v-btn>
        </v-col>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Confirmação
                </v-card-title>

                <v-card-text>
                    Deseja Excluir o registro?
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="confirmaExcluirProduto">
                        Sim
                    </v-btn>
                    <v-btn color="primary" text @click="dialog = false">
                        Cancelar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import {
    mdiPencil,
    mdiDelete,
} from '@mdi/js'

export default {
    name: "Cadastrados",

    components: {},

    data: () => ({
        cadastrados: [],
        dialog: false,
        indiceExclusao: -1,
        icons: {
            mdiPencil,
            mdiDelete,
        },
    }),

    methods: {
        readCad() {
            var listaDisc = JSON.parse(window.localStorage.getItem('listaCadastrados'));
            this.cadastrados = (listaDisc != null) ? listaDisc : [];
        },

        excluirProduto(c) {
            this.dialog = true;
            this.indiceExclusao = c;
            console.log(this.indiceExclusao);
        },

        confirmaExcluirProduto() {
            this.cadastrados.splice(this.indiceExclusao, 1);
            window.localStorage.setItem('listaCadastrados', JSON.stringify(this.cadastrados));
            this.dialog = false;
            this.indiceExclusao = -1;
        },

        abrirEdicao(indice) {
            this.$router.push({ name: 'edita', params: { 'indice': indice } });
        }
    },
    beforeMount() {
        this.readCad();
    }
};
</script>