import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiTailwindcss, SiPostgresql, SiMysql, SiCsharp } from 'react-icons/si'
import { DiDotnet, DiCode, DiGit, DiSass, DiJava, DiJqueryLogo } from'react-icons/di'
import { RiReactjsFill } from'react-icons/ri'

function Baloes(props){

    const icone = function verificaIcone(){
        if(props.text == "javascript"){
            return <IoLogoJavascript className='w-10 h-10'/>
        } else if(props.text == "tailwind"){
            return <SiTailwindcss className='w-10 h-10'/>
        } else if(props.text == "html"){
            return <IoLogoHtml5 className='w-10 h-10'/>
        } else if(props.text == "css"){
            return <IoLogoCss3 className='w-10 h-10'/>
        } else if(props.text == "react"){
            return <RiReactjsFill className='w-10 h-10'/>
        } else if(props.text == "postgresql"){
            return <SiPostgresql className='w-10 h-10'/>
        } else if(props.text == "mysql"){
            return <SiMysql className='w-10 h-10'/>
        } else if(props.text == "dotnet"){
            return <DiDotnet className='w-10 h-10'/>
        } else if(props.text == "git"){
            return <DiGit className='w-10 h-10'/>
        } else if(props.text == "java"){
            return <DiJava className='w-10 h-10'/>
        } else if(props.text == "sass"){
            return <DiSass className='w-10 h-10'/>
        } else if(props.text == "csharp"){
            return <SiCsharp className='w-10 h-10'/>
        } else if(props.text == "jquery"){
            return <DiJqueryLogo className='w-10 h-10'/>
        } else if(props.text == "cod"){
            return <DiCode className='w-10 h-10'/>
        } else {
            return null
        }
    }

    return(
        
        <div className={props.animations + " p-3 rounded-full bg-white drop-shadow-xl"} title={props.title}>
            {icone()}
        </div>

        
    )
}

export default Baloes;