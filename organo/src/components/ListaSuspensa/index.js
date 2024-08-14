import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa