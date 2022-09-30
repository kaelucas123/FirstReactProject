import "./Artigo.css"
function artigo(props) {
    return (
        <div id="art">
            <h2>{props.titulo}</h2>
            <div id="container">
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
        </div>
    )
}

export default artigo;