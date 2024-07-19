import DataContext from "../../data/DataContext"
import { useContext } from "react"

import Carregamentos from "../fieldsets-input/Carregamentos"
import Constantes from "../fieldsets-input/Constantes"
import Contorno from "../fieldsets-input/Contorno"
import Densidades from "../fieldsets-input/Densidades"
import Dimensoes from "../fieldsets-input/Dimensoes"
import Revestimento from "../fieldsets-input/Revestimento"
import Solo from "../fieldsets-input/Solo"
import VaoLivre from "../fieldsets-input/VaoLivre"
import Formulario from "./Formulario"

import formatNumber from "../../functions/formatNumber"
import { Tab as BootstrapTab } from 'bootstrap'

const EntradaDeDados = props => {

    const { state, } = useContext(DataContext)

    const handleSubmit = e => {
        e.preventDefault()

        const URL = "http://localhost:8000/api"

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        }

        fetch(URL, options)
            .then(resp => resp.json())
            .then(data => {
                const results = data
                const fields = document.querySelectorAll('.result')
                Array.from(fields).map(field => field.value = formatNumber(results[field.name]))

                const resultTab = document.getElementById('result-tab')
                resultTab.classList.remove('disabled')
                const tabToShow = new BootstrapTab(resultTab)
                tabToShow.show()
                document.documentElement.scrollTop = 0;
            })
            .catch(() => alert('Dados inválidos. Verifique e tente novamente'))
    }


    return (
        <div className="tab-pane fade show active" id="input" role="tabpanel" aria-labelledby="input-tab">
            <Formulario handleSubmit={handleSubmit}>
                <Dimensoes />
                <Densidades />
                <Constantes />
                <Carregamentos />
                <VaoLivre />
                <Revestimento />
                <Solo />
                <Contorno />
            </Formulario>
        </div>
    )
}

export default EntradaDeDados