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
import Footer from "../../components/Footer";

import Cursos from "/dados/curso";
import Formacao from "/dados/formacao";
import Habilidades from "/dados/habilidades";
import ProjetosTrabalhos from "/dados/projetosTrabalhos";
import Sobre from "/dados/sobre";

function Home(){

    const [curso, setCurso] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [sobre, setSobre] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [projetosTrabalhos, setProjetosTrabalhos] = useState([]);

    const mensagemConstrucao = () => {
        toast.warning('Página ainda está em desenvolvimento!');
    }

    useEffect(() => {
        mensagemConstrucao(); 
    }, []);

    return (
        <>
            <ToastContainer />
            
            <section className="md:min-h-screen min-h-fit lg:grid lg:grid-cols-2 px-10 md:grid-cols-1">
                <div className="flex flex-col justify-center items-start min-h-screen lg:h-screen">
                    <Apresentacao />
                    <article className="mt-8 flex">
                        <Button url="#contato" key="b1" icone="contato" text="Contato" />
                        <Button url="https://drive.google.com/file/d/1iQ_B0x6knOdvNm9iT_A-08ou8ANDKyEs/view?usp=share_link" key="b2" icone="download" text="Download CV" />
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
            
            <section id="sobre" className="min-h-screen px-10 flex flex-col justify-center">
                <Titulo text="Sobre mim" />

                {Sobre().map(dado => {
                    return <Conteudo key={dado.tipo} text={dado.descricao}/>
                })}

                <article className="mt-8 flex">
                    <Button url="https://www.linkedin.com/in/thiago-marques-sousa-b22627152/" key="b3" icone="linkedin" text="LinkedIn" />
                    <Button url="https://github.com/thiagomars" key="b4" icone="github" text="GitHub" />
                </article>
            </section>

            <section id="habilidades" className="min-h-screen px-10">
                <Titulo text="Habilidades" />
                
                <div className="mt-10 flex flex-row flex-wrap justify-around items-center mb-2">
                    {Habilidades().map(dado => {
                        return <BoxContent 
                                text={dado.descricao} 
                                value={dado.xp} 
                                key={"habilidade" + dado.id}/>
                    })}
                </div>
                
            </section>

            <section id="projetos" className="min-h-screen px-10">
                <Titulo text="Projetos e Trabalhos" />

                <div className="mt-20 flex flex-wrap items-center justify-center">
                    {ProjetosTrabalhos().map(dado => {
                        return <BoxVitrine 
                                key={"projTrab" + dado.id}
                                titulo={dado.titulo}
                                descricao={dado.descricao}
                                imagem={dado.imagem}
                                link={dado.link}/>
                    })}
                </div>

                <div className="w-full flex justify-center">
                    <Button url="https://github.com/thiagomars" key="b5" icone="projetos" text="Visualizar mais projetos" />
                </div>
            </section>

            <section id="formacao" className="min-h-max px-10">
                <Titulo text="Formação" />

                <div className="flex items-center h-max mt-12">
                    <div className="h-60 grid grid-flow-col overflow-y-auto overscroll-x-contain snap-x snap-mandatory">
                        {Formacao().map(dado => {
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

            <section id="certificados" className="min-h-screen px-10">
                <Titulo text="Certificados" />

                <div className="my-6">
                    {Cursos().map((dado) => {
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

            <section id="contato">
                <Footer />
            </section>
        </>
    )
}

export default Home;