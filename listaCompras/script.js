const maisProdutos = async () =>{
    let inicio = document.getElementById('campos');
    console.log(inicio)

} 
maisProdutos()


//calculo preco

function calculo(){
    let quantidadeProduto = document.getElementById('quantidade').value;
    let precoProduto = document.getElementById('valorProduto').value;
    let totalValor = Number(quantidadeProduto * precoProduto).toFixed(2);
        document.getElementById('total').setAttribute("value",totalValor);
}




















