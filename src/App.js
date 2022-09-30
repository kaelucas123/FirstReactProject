import './App.css';
import Forms from './components/Forms';
import Artigo from './components/Artigo';
import Loja from './components/Loja';


function App() {
  return (
    <div>
      <main>
        {/*---------------------------------SECTION 1-------------------------------------------------------- */}
        <header>
          <div id="logo">
            <img src="/images/LogoL.png" alt="Girl in a jacket" />
          </div>
          <div class="formulario">
            <h2>ENTRE COM SEUS DADOS </h2>
            <Forms placeholder='Entre com seu nome' />
            <Forms placeholder='Entre com seu endereço' />
            <Forms placeholder='Entre com seu telefone' />
            <Forms placeholder='Entre com seu Cep' />
            <input class="buttonSend" value="Enviar" type="button" />
          </div>
          <div id="login">
            Login
          </div>
        </header>
        {/*---------------------------------SECTION 2-------------------------------------------------------- */}
        <article>
          <div id="comments">
            <Artigo titulo="POR QUE COMPRAR NAS LOJAS LION?" />
            <Artigo titulo="MAIS QUALIDADE E MENOR PREÇO!" />
          </div>
          <div id="comments">
            <Artigo titulo="NOSSAS LOJAS PELO BRASIL." />
            <Artigo titulo="PRODUTOS PARA TODA A FAMÍLIA." />
          </div>
        </article>
        {/*---------------------------------SECTION 2-------------------------------------------------------- */}
        <section id="loja">
          
          <Loja produto="Android TV LED 43” TCL S615 Full HD HDR com Wifi." foto={"/images/p1.jpg"} fabricante="Samsung" preco="R$1.699,16"/>
          <Loja produto="11 Peças Elástico Extensor Exercicio Funcional até 100 libras." foto={"/images/p2.jpg"} fabricante="Multtrust" preco="R$R$23,99"/>
          <Loja produto="Galaxy Tab A7 Lite 4G 32GB 3G RAM Tela imersiva 8.7 pol.." foto={"/images/p3.jpg"} fabricante="Samsung" preco="R$823,26"/>


        </section>

      </main>
    </div>
  );
}

export default App;
