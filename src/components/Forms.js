import "./Forms.css"
function forms(props){
    return(
        <div>
            <input type="text" required placeholder={props.placeholder}/>
        </div>
    )
}

export default forms;