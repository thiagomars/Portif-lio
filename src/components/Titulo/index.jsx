function Titulo(props){
    return(
        <div className="flex mb-5">
            <h1 className="text-8xl font-bold text-white drop-shadow-lg">
                {props.text}
            </h1>
        </div>
        
    )
}

export default Titulo;