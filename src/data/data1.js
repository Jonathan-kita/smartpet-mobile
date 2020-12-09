import Api from '../Services/Api'

export default [function Avaliacao_0() {
  return Api.post('/List_Lojas').then(results => {
    return results.data;
  })
},
function Lojas_1() {
  return Api.post('/List_Lojas').then(results => {
    return results.data;
  })
},
function Produtos_2() {
  return Api.post('/List_Produtos').then(results => {
    return results.data;
  })
},
function Pedidos_3(status) {
  return Api.post('/List_Pedidos').then(results => {
    return results.data.filter((result) => { return result.status === status })

  })
},
function Itens_Pedidos_4(id) {
  return Api.post('/Lista_Produtos_Pedidos', { "id": id }).then(results => {
    /* console.log("TESTE"+results.data.filter("status")==="ativo")*/
    return results.data;
  })
},
function Produto_Empresa_5(id, categoria) {
  return Api.post('/List_Product_Category', { "idempresa": id, "categoria": categoria }).then(results => {
    return results.data;
  })
},
function Produto_Detalhes_6(id) {
  return Api.post('/List_Product_Details', { "idproduto": id }).then(results => {
    console.log(results);
    return results.data;
  })
},
function Produto_Categoria_7(id) {
  return Api.post('/Category_Current', { "idproduto": id }).then(results => {
    console.log(results);
    return results.data;
  })
}

]
