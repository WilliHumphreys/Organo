import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColabCad({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto 
                    required={true} 
                    label="Imagem" 
                    placeholder="Insira sua imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa
                    required={true} 
                    label="Time"
                    itens={times}
                    valor={time} 
                    aoAlterado={valor => setTime(valor)} 
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario