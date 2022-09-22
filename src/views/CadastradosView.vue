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
                    <th class="text-left" style="width: 15%">Categoria</th>
                    <th class="text-left" style="width: 40%">Nome</th>
                    <th class="text-left" style="width: 10%">Preço</th>
                    <th class="text-left" style="width: 5%">Qtd</th>
                    <th class="text-left" style="width: 15%">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cadastro, indice) in cadastrados" :key="indice">
                    <td> {{cadastro.codigo}}</td>
                    <td> {{cadastro.categoria}}</td>
                    <td> {{cadastro.nome}}</td>
                    <td> {{cadastro.preco}}</td>
                    <td> {{cadastro.qtn}}</td>
                </tr>
            </tbody>
        </v-simple-table>

        <v-col class="text-left">
            <v-btn to="/cadastro" text class="primary">Novo Cadastro</v-btn>
            <v-btn to="/" text class="primary">Home</v-btn>
        </v-col>
    </v-app>
</template>>
