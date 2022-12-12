function BoxVitrine(props){
    return (
        <a href={props.link} target="_blank" className="cursor-pointer mx-3 mb-16 rounded-md h-80 bg-white shadow-md w-3/4 sm:w-5/12 lg:w-1/4 ">
            <div className="w-full h-3/4 bg-slate-400 rounded-t-md">
                <img src={props.imagem} className="rounded-t-md object-cover w-full h-full"></img>
            </div>

            <div className="h-1/4 flex flex-col justify-center p-2">
                <h1 className="font-semibold text-sm">{props.titulo}</h1>
                <p className="truncate text-sm">{props.descricao}</p>
            </div>
        </a>
    )
}

export default BoxVitrine;