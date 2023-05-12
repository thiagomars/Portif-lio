import Apresentacao from "../../components/Apresentacao";
import Baloes from "../../components/Baloes";
import BoxContent from "../../components/BoxContent";
import BoxVitrine from "../../components/BoxVitrine";
import Button from "../../components/Button";
import Conteudo from "../../components/Conteudo";
import ItemTimeLine from "../../components/ItemTimeLine";
import Titulo from "../../components/Titulo";
import ListVertical from "../../components/ListVertical";

import { GiSkills } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonLinesFill, BsTools } from 'react-icons/bs';
import { RiSuitcaseFill, RiMessageFill } from 'react-icons/ri';
import { IoMdSchool, IoMdDocument } from 'react-icons/io';

import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

import Cursos from "/dados/curso";
import Formacao from "/dados/formacao";
import Habilidades from "/dados/habilidades";
import ProjetosTrabalhos from "/dados/projetosTrabalhos";
import Sobre from "/dados/sobre";
import { toast } from "react-toastify";
import BarraLateral from "../../components/BarraNavegacaoLateral";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useSubmit, Form } from "react-router-dom";

function Home() {

    const [curso, setCurso] = useState([]);
    const [formacao, setFormacao] = useState([]);
    const [sobre, setSobre] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [projetosTrabalhos, setProjetosTrabalhos] = useState([]);

    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");

    const navigate = useNavigate();

    const mensagemConstrucao = () => {
        toast.warning('Página ainda está em desenvolvimento!');
    }

    useEffect(() => {
        mensagemConstrucao();
    }, []);

    const handleHabilidades = () => {

    }

    function redirecionarTeste(){
        navigate("/Certificados", {state: {id: 2, nome: nome, sobreNome: sobreNome}})
    }

    return (
        <>
            <div className="flex flex-col md:flex-row">

                <div className="h-screen w-fit hidden lg:flex lg:sticky lg:top-0">
                    <div className="px-3 flex flex-col justify-center">
                        <BarraLateral sepUp={false} icone={<AiFillHome />} link="#home" />
                        <BarraLateral sepUp={true} icone={<BsFillPersonLinesFill />} link="#sobre" />
                        <BarraLateral sepUp={true} icone={<BsTools />} link="#habilidades" />
                        <BarraLateral sepUp={true} icone={<RiSuitcaseFill />} link="#projetos" />
                        <BarraLateral sepUp={true} icone={<IoMdSchool />} link="#formacao" />
                        <BarraLateral sepUp={true} icone={<IoMdDocument />} link="#certificados" />
                        <BarraLateral sepUp={true} icone={<RiMessageFill />} link="#contato" />
                    </div>
                </div>

                <div className="flex flex-col w-screen">
                    <section id="home" className="md:min-h-screen min-h-fit lg:grid lg:grid-cols-2 px-10 md:grid-cols-1">
                        <div className="flex flex-col justify-center items-start min-h-screen ">
                            <Apresentacao />
                            <article className="mt-8 flex justify-center w-full lg:w-fit lg:justify-start">
                                <Button url="/Contato" key="b1" icone="contato" text="Contato" />
                                <Button url="https://drive.google.com/file/d/1iQ_B0x6knOdvNm9iT_A-08ou8ANDKyEs/view?usp=share_link" key="b2" icone="download" text="Download CV" />
                            </article>
                        </div>
                        <div className="flex gap-3 flex-col lg:items-end justify-center items-center">
                            <div className="flex gap-3 flex-row">
                                <Baloes title="HTML5" text="html" animations="animate-flutuandoA" />
                                <Baloes title="CSS3" text="css" animations="animate-flutuandoB" />
                                <Baloes title="JavaScript" text="javascript" animations="animate-flutuandoC" />
                                <Baloes title="Java" text="java" animations="animate-flutuandoE" />
                                <Baloes title="React.JS" text="react" animations="animate-flutuandoD" />
                            </div>

                            <div className="flex gap-3 flex-row">
                                <Baloes title=".NET" text="dotnet" animations="animate-flutuandoD" />
                                <Baloes title="JQUERY" text="jquery" animations="animate-flutuandoF" />
                                <Baloes title="Tailwind" text="tailwind" animations="animate-flutuandoG" />
                                <Baloes title="C#" text="csharp" animations="animate-flutuandoB" />
                            </div>

                            <div className="flex gap-3 flex-row">
                                <Baloes title="SASS" text="sass" animations="animate-flutuandoH" />
                                <Baloes title="MySQL" text="mysql" animations="animate-flutuandoA" />
                                <Baloes title="Postgresql" text="postgresql" animations="animate-flutuandoD" />
                            </div>

                            <div className="flex gap-3 flex-row">
                                <Baloes title="Code" text="cod" animations="animate-flutuandoC" />
                                <Baloes title="Git" text="git" animations="animate-flutuandoE" />
                            </div>
                        </div>
                    </section>

                    <section id="sobre" className="min-h-screen px-10 flex flex-col justify-center">
                        <Titulo text="Sobre mim" />

                        {Sobre().map(dado => {
                            return <Conteudo key={dado.tipo} text={dado.descricao} />
                        })}

                        <article className="mt-8 flex justify-center md:w-full">
                            <Button url="https://www.linkedin.com/in/thiago-marques-sousa-b22627152/" key="b3" icone="linkedin" text="LinkedIn" />
                            <Button url="https://github.com/thiagomars" key="b4" icone="github" text="GitHub" />
                        </article>
                    </section>

                    <section id="habilidades" className="min-h-screen px-10">
                        <Titulo text="Habilidades" />

                        <div className="mt-10 flex flex-row flex-wrap justify-around items-center mb-8">
                            {Habilidades().map(dado => {
                                return <BoxContent
                                    text={dado.descricao}
                                    value={dado.xp}
                                    key={"habilidade" + dado.id} />
                            })}
                        </div>

                        <div className="w-full flex justify-center">
                            <Button url="/Habilidades" key="b5" icone="projetos" text="Visualizar Skills" />
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
                                    link={dado.link} />
                            })}
                        </div>

                        <div className="w-full flex justify-center">
                            <Button url="/Projetos" key="b6" icone="projetos" text="Visualizar mais projetos" />
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
                                        key={"certificado" + dado.id}
                                        nome={dado.nome}
                                        plataforma={dado.plataforma}
                                        dataFim={dado.dataFim}
                                        href={dado.link} />
                                    : null
                            })}
                        </div>

                        <Button url="/Certificados" key="b7" icone="mais" text="Mostrar mais" />
                    </section>
                </div>
            </div>

            <section id="contato">
                <Footer />
            </section>

            <form method="post" className="form">
                <input type="text" className="signup-input" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" className="signup-input" value={sobreNome} onChange={(e) => setSobreNome(e.target.value)}/>
                <button className="btn btn-primary" onClick={() => redirecionarTeste()}>Submit</button>
            </form>
        </>
    )
}

export default Home;