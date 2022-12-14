function BoxVitrine(props){
    return (
        <a href={props.link} target="_blank" className="shadow-md rounded-sm px-2 group cursor-pointer mx-3 mb-10 h-max w-full sm:w-2/5 lg:w-[31%] ">
            <div className="w-full overflow-hidden">
                <img src={props.imagem} className="bg-center bg-cover object-cover w-full h-full group-hover:animate-zoomBox"></img>
            </div>

            <div className="h-fit flex flex-col justify-center py-3">
                <h1 className="font-bold text-sm">{props.titulo}</h1>
                <p className="truncate text-sm">{props.descricao}</p>
            </div>
        </a>
    )
}

export default BoxVitrine;