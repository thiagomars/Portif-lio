import { AiFillHome } from "react-icons/ai"

export default function BarraLateral(props) {


    return (
        <div className="flex flex-col items-center">
            {props.sepUp == true ?
            <div> 
                <div className="h-1 w-1 my-1 rounded-full bg-cyan-400"></div>
                <div className="h-1 w-1 my-1 rounded-full bg-cyan-400"></div>
                <div className="h-1 w-1 my-1 rounded-full bg-cyan-400"></div>
            </div> : null }

            <a href={props.link} className="h-8 w-8 shadow-md flex justify-center items-center rounded-full bg-cyan-400/70 text-white">
                {props.icone}
            </a>
        </div>
    )
}