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
        </v-simple-table>
        <v-col class="text-right">
            <v-btn to="/" text class="primary">Voltar</v-btn>
        </v-col>
    </v-app>
</template>