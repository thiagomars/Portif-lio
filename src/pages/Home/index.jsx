import Apresentacao from "../../components/Apresentacao";
import Baloes from "../../components/Baloes";
import BoxContent from "../../components/BoxContent";
import BoxVitrine from "../../components/BoxVitrine";
import Button from "../../components/Button";
import Conteudo from "../../components/Conteudo";
import ItemTimeLine from "../../components/ItemTimeLine";
import Titulo from "../../components/Titulo";
import ListVertical from "../../components/ListVertical";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useState, useEffect } from "react";
import axios from 'axios';

function Home(){

    const [curso, setCurso] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [sobre, setSobre] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [projetosTrabalhos, setProjetosTrabalhos] = useState([]);

    async function lerCurso(){
        await axios.get('../../dados/curso.json')
            .then(dados => setCurso(dados.data));
    }

    async function lerFormacao(){
        await axios.get('../../dados/formacao.json')
            .then(dados => setFormacao(dados.data));
    }
    
    async function lerSobre(){
        await axios.get('../../dados/sobre.json')
            .then(dados => setSobre(dados.data));
    }

    async function lerHabilidades(){
        await axios.get('../../dados/habilidades.json')
            .then(dados => setHabilidades(dados.data));
    }

    async function lerProjetosTrabalhos(){
        await axios.get('../../dados/projetosTrabalhos.json')
            .then(dados => setProjetosTrabalhos(dados.data));
    }

    const mensagemConstrucao = () => {
        toast.warning('Página ainda está em desenvolvimento!');
    }

    useEffect(() => {
        //Dados das sections
        lerCurso();
        lerFormacao();
        lerSobre();
        lerHabilidades();
        lerProjetosTrabalhos();

        mensagemConstrucao(); 
    }, []);

    

    

    return (
        <>
            <ToastContainer />
            
            <section className="min-h-screen lg:grid lg:grid-cols-2 px-10 md:grid-cols-1">
                <div className="flex flex-col justify-center items-start lg:min-h-full h-screen">
                    <Apresentacao />
                    <article className="mt-8 flex">
                        <Button key="b1" icone="contato" text="Contato" />
                        <Button key="b2" icone="download" text="Download CV" />
                    </article>
                </div>
                <div className="flex flex-col lg:items-end justify-center items-center">
                    <div className="flex flex-row">
                        <Baloes title="HTML5" text="html" animations="animate-flutuandoA"/>
                        <Baloes title="CSS3" text="css" animations="animate-flutuandoB"/>
                        <Baloes title="JavaScript" text="javascript" animations="animate-flutuandoC"/>
                        <Baloes title="Java" text="java" animations="animate-flutuandoE"/>
                        <Baloes title="React.JS" text="react" animations="animate-flutuandoD"/>
                    </div>

                    <div className="flex flex-row">
                        <Baloes title=".NET" text="dotnet" animations="animate-flutuandoD"/>
                        <Baloes title="JQUERY" text="jquery" animations="animate-flutuandoF"/>
                        <Baloes title="Tailwind" text="tailwind" animations="animate-flutuandoG"/>
                        <Baloes title="C#" text="csharp" animations="animate-flutuandoB"/>
                    </div>
                    
                    <div className="flex flex-row">
                        <Baloes title="SASS" text="sass" animations="animate-flutuandoH"/>
                        <Baloes title="MySQL" text="mysql" animations="animate-flutuandoA"/>
                        <Baloes title="Postgresql" text="postgresql" animations="animate-flutuandoD"/>
                    </div>

                    <div className="flex flex-row">
                        <Baloes title="Code" text="cod" animations="animate-flutuandoC"/>
                        <Baloes title="Git" text="git" animations="animate-flutuandoE"/>
                    </div>
                </div>
            </section>
            
            <section className="min-h-screen px-10 flex flex-col justify-center">
                <Titulo text="Sobre mim" />

                {sobre.map(dado => {
                    return <Conteudo key={dado.tipo} text={dado.descricao}/>
                })}

                <article className="mt-8 flex">
                    <Button key="b3" icone="linkedin" text="LinkedIn" />
                    <Button key="b4" icone="github" text="GitHub" />
                </article>
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Habilidades" />
                
                <div className="mt-10 flex flex-row flex-wrap justify-around items-center mb-2">
                    {habilidades.map(dado => {
                        return <BoxContent 
                                text={dado.descricao} 
                                value={dado.xp} 
                                key={"habilidade" + dado.id}/>
                    })}
                </div>
                
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Projetos e Trabalhos" />

                <div className="mt-20 flex flex-wrap items-center justify-center">
                    {projetosTrabalhos.map(dado => {
                        return <BoxVitrine 
                                key={"projTrab" + dado.id}
                                titulo={dado.titulo}
                                descricao={dado.descricao}
                                imagem={"../../imagens/" + dado.imagem}
                                link={dado.link}/>
                    })}
                </div>

                <div className="w-full flex justify-center">
                    <Button key="b5" icone="projetos" text="Visualizar mais projetos" />
                </div>
            </section>

            <section className="min-h-max px-10">
                <Titulo text="Formação" />

                <div className="flex items-center h-max mt-12">
                    <div className="h-60 grid grid-flow-col overflow-y-auto overscroll-x-contain snap-x snap-mandatory">
                        {formacao.map(dado => {
                            return <ItemTimeLine 
                                    instituicao={dado.instituicao} 
                                    local={dado.local}
                                    periodo={dado.periodo}
                                    ano={dado.ano}
                                    curso={dado.curso}
                                    key={"form" + dado.id} />
                        })} 
                    </div>
                </div>
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Certificados" />

                <div className="my-6">
                    {curso.map((dado) => {
                        return dado.id < 5 
                        ? <ListVertical 
                                key = {"certificado" + dado.id}
                                nome= {dado.nome}
                                plataforma = {dado.plataforma}
                                dataFim = {dado.dataFim} 
                                href = {dado.link}/>
                        : null
                    })}
                </div>

                <Button key="b6" icone="mais" text="Mostrar mais" />

                
            </section>
        </>
    )
}

export default Home;