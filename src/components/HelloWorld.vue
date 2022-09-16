<template>
  <v-container>
    <div>
      <fieldset>
        <legend>Cadastro de Produtos</legend>
        <div>
          <div>
            <label for="codigo">Código</label>
            <input type="number">
          </div>
          <div>
            <label for="categoria">Categoria</label>
            <select>
              <option selected>Escolha uma categoria</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Limpeza">Limpeza</option>
              <option value="Matinal">Matinal</option>
              <option value="Frios">Frios</option>
              <option value="Enlatado">Enlatado</option>
              <option value="Higiene Pessoal">Higiene Pessoal</option>
              <option value="Açougue">Açougue</option>
              <option value="Cama, mesa e banho">Cama, mesa e banho</option>
            </select>
          </div>
          <div>
            <label for="nome">Nome</label>
            <input type="text">
          </div>
          <div>
            <label for="preco">Preço</label>
            <input type="number">
          </div>
          <div>
            <label for="qnt">Quantidade</label>
            <input type="number">
          </div>
          <div>
            <button v-on:click="salvar()" class="btn btn-primary"
              :disabled="produto.codigo==null || produto.categoria==null || produto.nome==null || produto.preco==null || produto.quantidade==null">Salvar</button>
            <button v-on:click="excluir()" class="btn btn-danger m-3" :disabled="produto.id==null">Excluir</button>
            <button v-on:click="cancelar()" class="btn btn-warning"
              :disabled="produto.codigo==null && produto.categoria==null && produto.nome==null && produto.preco==null && produto.quantidade==null">Cancelar</button>
          </div>
        </div>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th style="width: 10%;">Código</th>
            <th style="width: 25%;">Categoria</th>
            <th style="width: 25%;">Nome</th>
            <th style="width: 10%;">Preço</th>
            <th style="width: 10%;">Qtd</th>
            <th style="width: 10%;">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Código</td>
            <td>Categoria</td>
            <td>Nome</td>
            <td>R$ </td>
            <td>Quantidade</td>
            <td>R$ </td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
