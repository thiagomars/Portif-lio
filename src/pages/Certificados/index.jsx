import Titulo from "../../components/Titulo";
import Cursos from "/dados/curso";
import ListVertical from "../../components/ListVertical";
import { Route, useLocation } from "react-router-dom";

export default function Certificados(props) {

    const {state} = useLocation();
    const { id, nome, sobreNome } = state;

    console.log(nome);
    console.log(sobreNome);

    return (
        <div className="px-10 py-16">
            <Titulo text="Certificados" />

            <div className="my-6">
                {Cursos().map((dado) => {
                    return dado.id < 100
                        ? <ListVertical
                            key={"certificado" + dado.id}
                            nome={dado.nome}
                            plataforma={dado.plataforma}
                            dataFim={dado.dataFim} 
                            />
                        : null
                })}
            </div>


        </div>
    )
}