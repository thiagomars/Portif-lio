function Apresentacao(){
    return(
        <div className="text-center lg:text-start md:w-full">
            <h2 className="text-3xl">Olá, meu nome é</h2>
            <h1 className="text-6xl font-bold mt-1">Thiago Marques</h1>
            <div className="flex flex-col lg:flex-row mt-2 lg:items-end">
                <h2 className="text-2xl lg:text-end">e sou</h2>
                <h1 className="text-3xl font-bold ml-2 h-full">Desenvolvedor <span className="text-5xl">Full Stack.</span></h1>
            </div>
        </div>
    )
}
 
export default Apresentacao; 