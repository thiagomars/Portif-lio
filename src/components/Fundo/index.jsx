function Fundo() {
    return (
        <div className='fixed -z-10 w-screen h-screen'>
            <span className='animate-ping absolute -top-5 left-1/3 flex w-48 h-48 bg-fuchsia-600 blur-[250px]'></span>
            <span className='animate-pulse absolute right-0 flex w-64 h-64 bg-cyan-400 blur-[100px]'></span>
            <span className='absolute -bottom-10 -left-10 flex w-80 h-80 bg-yellow-300 blur-[120px]'></span>
        </div>
    )
}

export default Fundo;