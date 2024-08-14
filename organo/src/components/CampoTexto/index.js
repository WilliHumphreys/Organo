import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campoTexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto