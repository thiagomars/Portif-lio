function Titulo(props){
    return(
        <div className="flex mb-5">
            <h1 className="mt-5 text-center w-full break-words text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl md:text-left lg:text-8xl">
                {props.text}
            </h1>
        </div>
        
    )
}

export default Titulo;