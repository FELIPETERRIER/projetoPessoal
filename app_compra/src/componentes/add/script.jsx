import './style.css';
import BotaoAdd from '../botao+';






import Calculo from '../calculo/script';


function Add() {
    return (
      
      <section className='taRabo'>
        <div className="campos" id="campos" >
            <input placeholder="Item:" type="text" id="item" name="produto" required />
            <input placeholder="Quantidade" type="number" id="quantidade" name="quantidade"  required />
            <select id="medidas">
                <option value="un">un</option>
                <option value="kg">kg</option>
                <option value="g">g</option>                            
            </select>
            <input type="text" className="valorProduto"id='valorProduto'/>        
            <input type="text" ClassName="total" id="total"/>            
        </div>
        <button onClick={BotaoAdd}>oioioioio</button>
        
      </section>
     
    
      
    );
  }
  
  export default Add;
  