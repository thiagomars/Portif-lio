import { RiMedalFill } from 'react-icons/ri';

function ListVertical(props){
    return(
        <div className="flex flex-row -mt-3">
            <div className="w-2 rounded-full bg-white shadow-md flex items-center justify-center mr-6">
                <div className="bg-emerald-400 p-1 rounded-full text-white shadow-md"> <RiMedalFill className='w-5 h-5' /> </div>
            </div>
            <div className="flex flex-row justify-center items-center py-3">
                <div className="bg-white/40 p-2 rounded-md">
                    <h1 className="font-semibold mb-1">Curso Web Moderno Completo com JavaScript 2022 + Projetos</h1>
                    <p className="font-light text-sm ">Plataforma: <span className="font-normal">Udemy</span></p>
                    <p className="font-light text-sm ">Data: <span className="font-normal">10/08/2022</span></p>
                </div>
            </div>
        </div>
    )
}

export default ListVertical;