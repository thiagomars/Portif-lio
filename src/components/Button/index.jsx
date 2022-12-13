import { IoMdContact, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { MdDownloadForOffline } from 'react-icons/md';
import { HiPlusCircle } from 'react-icons/hi';
import { SiWheniwork } from 'react-icons/si'

const icone = [
    {
        "tipo": "contato",
        "tag": <IoMdContact className='w-5 h-5 mr-2'/>
    },
    {
        "tipo": "download",
        "tag": <MdDownloadForOffline className='w-5 h-5 mr-2'/>
    },
    {
        "tipo": "linkedin",
        "tag": <IoLogoLinkedin className='w-5 h-5 mr-2'/>
    },
    {
        "tipo": "github",
        "tag": <IoLogoGithub className='w-5 h-5 mr-2'/>
    },
    {
        "tipo": "mais",
        "tag": <HiPlusCircle className='w-5 h-5 mr-2'/>
    },
    {
        "tipo": "projetos",
        "tag": <SiWheniwork className='w-5 h-5 mr-2'/>
    }
]

function Button(props){
    return(
        <button key={props.key} className="flex flex-row whitespace-nowrap text-sm font-semibold shadow-md hover:bg-white/60 hover:shadow-xl duration-200 px-3 py-2 mr-5 mb-5 rounded-lg border-gray-500 ring-gray-500 ring-2 bg-white/10 backdrop-blur-3xl backdrop-opacity-80">
            {icone.map( (tag) => tag.tipo == props.icone ? tag.tag : null)}
            {props.text}
        </button>
    )
}

export default Button;