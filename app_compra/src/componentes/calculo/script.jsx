
export default function Calculo() {
    return (
        function multi() {
            let precoUnitario = document.getElementById('valorProduto').value;
            let quantidadeProduto = document.getElementById('quantidade').value;
            let totalValor = Number(quantidadeProduto * precoUnitario).toFixed(2);
            document.getElementById('total').setAttribute("value",totalValor);
            
        }
        
       
      
    );
}


  



   
