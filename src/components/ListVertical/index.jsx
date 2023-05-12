import { RiMedalFill } from 'react-icons/ri';

function ListVertical(props){
    return(
        <div className="flex flex-row -mt-3" key={props.key} onClick={() => props.onClick}>
            <div className="w-2 rounded-full bg-white shadow-md flex items-center justify-center mr-6">
                <div className="bg-emerald-500 p-1 rounded-full text-white shadow-md"> <RiMedalFill className='w-5 h-5' /> </div>
            </div>
            <div className="flex flex-row justify-center items-center py-3">
                <a href={props.href} target="_blank" className="bg-white/40 p-2 rounded-md shadow-sm">
                    <h1 className="font-semibold mb-1">{props.nome}</h1>
                    <p className="font-light text-sm ">Plataforma: <span className="font-normal">{props.plataforma}</span></p>
                    <p className="font-light text-sm ">Data: <span className="font-normal">{props.dataFim}</span></p>
                </a>
            </div>
        </div>
    )
}

export default ListVertical;