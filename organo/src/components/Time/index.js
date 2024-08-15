import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const corPrimaria = props.corPrimaria

    return (
        (props.colaborador.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {props.colaborador.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corBg={corPrimaria}/>)}
        </section>
    )
} 

export default Time