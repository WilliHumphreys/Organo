import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto