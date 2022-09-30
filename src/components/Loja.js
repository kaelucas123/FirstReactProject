import './Loja.css'
function loja({produto, fabricante, foto, preco}){
    return(
        <div id="cont">
            <h2>Produto: {produto}</h2>
            <img src={foto} alt=''></img>
            <h3>Fabricante: {fabricante}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    )
}
export default loja