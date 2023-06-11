import ButtonAbas from "../../components/ButtonAbas";
import Titulo from "../../components/Titulo";
import ProjetosTrabalhos from "/dados/projetosTrabalhos";

export default function Projetos() {

    const titulos = [];
    const links = [];

    ProjetosTrabalhos().map(dado => {
        titulos.push(dado.titulo);
        links.push(dado.link);
    })

    return (
        <div className="p-4">

            <Titulo text="Projetos e Trabalhos" />

            <p className="mt-10">Para ver todos os projetos, basta acessar meu GitHub, lá você econtrará o código, imagens e link do projeto.</p>
            <p className="mb-10">Logo abaixo, você pode visualizar de forma rápida alguns desses projetos.</p>

            <ButtonAbas defaultValue={titulos[0]}>
                <ButtonAbas.Titulos titulos={titulos}></ButtonAbas.Titulos>
                {
                    links.map((value, index) => {
                        return (
                            <ButtonAbas.Conteudo value={titulos[index]} >
                                <iframe width={"100%"} height={"500px"} src={value}></iframe>
                            </ButtonAbas.Conteudo>
                        )
                    })
                }
            </ButtonAbas>
        </div >
    )
}
