import Apresentacao from "../../components/Apresentacao";
import Baloes from "../../components/Baloes";
import BoxContent from "../../components/BoxContent";
import BoxVitrine from "../../components/BoxVitrine";
import Button from "../../components/Button";
import Conteudo from "../../components/Conteudo";
import ItemTimeLine from "../../components/ItemTimeLine";
import Titulo from "../../components/Titulo";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useEffect } from "react";


function Home(){

    useEffect(() => {
        mensagemConstrucao();
    }, []);

    const mensagemConstrucao = () => {
        toast.warning('Página ainda está em desenvolvimento!');
    }

    const biografia = `Olá, meu nome é Thiago Marques e tenho 22 anos. Sou Desenvolvedor WEB e 
    atualmente curso Engenharia da Computação pela Universidade Federal do Ceará - UFC. Trabalho 
    com desenvolvimento web já faz dois anos, e antes disso, comecei trabalhando com JAVA entre 2016 e 2018. 
    Sou bastante proativo e focado, gosto muito de aprender sobre tudo, tenho uma boa gestão do meu tempo.`;

    const universidade = `Na Universidade, faço parte do Centro Acadêmico de Engenharia de Computação 
    onde realizo vários trabalhos para tentar ajudar os alunos do curso de várias formas, como 
    trazendo cursos, informçãoes, avisos e notícias através de nossos canais de comunicação.`;

    const trabalhos = `Já desenvolvi vários trabalhos em diferentes linguagens, mas atualmente estou bem 
    focado com JavaScript e linguagem WEB. Comecei com JAVA onde participei de projetos pessoais e escolares, 
    e onde aprendi sobre orientação a objetos, desenvolvi com C e C++ durante os primeiros períodos da faculdade 
    (apesar de ser mais voltado para hardware, também acabei gostando bastante), e atualemente, além das 
    linguagens e tecnologias de desenvolvimento para Front End (HTML, CSS, JavaScript, JQUERY, Requisições 
    com AJAX e SASS), estou aprendendo React (onde a prova viva é esse meu portifólio), Tailwind, C# e .NET para 
    criação de API's.`;

    return (
        <>
            <ToastContainer />
            
            <section className="min-h-screen lg:bg-slate-800 lg:grid lg:grid-cols-2 px-10 md:grid-cols-1">
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

                <Conteudo text={biografia}/>
                <Conteudo text={universidade} />
                <Conteudo text={trabalhos} />

                <article className="mt-8 flex">
                    <Button key="b3" icone="linkedin" text="LinkedIn" />
                    <Button key="b4" icone="github" text="GitHub" />
                </article>
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Habilidades" />
                
                <div className="mt-10 flex flex-row flex-wrap justify-around items-center mb-2">
                    <BoxContent text="Desenvolvimento WEB com HTML, CSS e JavaScript" value="3" />
                    <BoxContent text="Outras tecnolgias para WEB como JQUERY, AJAX, SASS e Tailwind" value="2" />
                    <BoxContent text="Frameworks para WEB como React.JS e Angular" value="2" />
                    <BoxContent text="Bancos relacionais e linguagens de consulta SQL com o MySQL e Postgresql" value="1" />
                    <BoxContent text="Trabalhos com tecnologias JAVA" value="2" />
                    <BoxContent text="Metodologias Ágeis, testes automatizados (TDD e BDD) e versionamento GIT." value="1" />
                    <BoxContent text="Criação de APIs com C# e .NET" value="1" />
                </div>
                
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Projetos e Trabalhos" />

                <div className="mt-20 flex flex-wrap items-center justify-center">
                    <BoxVitrine />
                    <BoxVitrine />
                    <BoxVitrine />
                    <BoxVitrine />
                    <BoxVitrine />
                    <BoxVitrine />
                    <BoxVitrine />
                </div>
            </section>

            <section className="min-h-screen px-10">
                <Titulo text="Formação" />

                <div className="flex items-center h-max mt-12">
                    <div className="h-60 grid grid-flow-col overflow-y-auto overscroll-x-contain snap-x snap-mandatory">
                    
                        <ItemTimeLine 
                        instituicao="EEEP RITA AGUIAR BARBOSA   " 
                        local="Itapipoca/CE" 
                        periodo="2015 até 2017"
                        ano="2015"
                        curso="Ensino Técnico em Redes de Computadores"/>
                        
                        <ItemTimeLine 
                        instituicao="UNIVERSIDADE FEDERAL DO CEARÁ - UFC" 
                        local="Sobral/CE" 
                        periodo="Cursando desde 2016"
                        ano="2016"
                        curso="Bacharelado em Engenharia de Computação"/>

                        <ItemTimeLine 
                        instituicao="INSTITUO FEDERAL DO CEARÁ - IFCE" 
                        local="Sobral/CE" 
                        periodo="Cursando desde 2019"
                        ano="2019"
                        curso="Técnico em Mecânica"/>

                        <ItemTimeLine 
                        instituicao="INSTITUO FEDERAL DO CEARÁ - IFCE" 
                        local="Sobral/CE" 
                        periodo="Cursando desde 2019"
                        ano="2019"
                        curso="Técnico em Mecânica"/>

                        <ItemTimeLine 
                        instituicao="INSTITUO FEDERAL DO CEARÁ - IFCE" 
                        local="Sobral/CE" 
                        periodo="Cursando desde 2019"
                        ano="2019"
                        curso="Técnico em Mecânica"/>

                        <ItemTimeLine 
                        instituicao="INSTITUO FEDERAL DO CEARÁ - IFCE" 
                        local="Sobral/CE" 
                        periodo="Cursando desde 2019"
                        ano="2019"
                        curso="Técnico em Mecânica"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;