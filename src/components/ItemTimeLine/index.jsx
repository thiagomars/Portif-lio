function ItemTimeLine(props){

    return (
        <div className="min-w-max h-fit z-40">
            <div className="flex flex-col justify-center items-center">

                <div className="flex flex-col justify-center items-center bg-green-500 shadow-lg py-1 px-2 rounded-lg text-white">
                    <p className="text-sm font-medium">{props.ano}</p>
                </div>
                <div className="mb-1 w-0 h-0 border-t-8 border-l-8 border-r-8 border-solid border-t-green-500 border-l-transparent border-r-transparent"></div>
                
                <div className="w-full bg-gray-200 flex justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"> </div>
                </div>
                
                <div className="mt-1 w-0 h-0 border-b-8 border-l-8 border-r-8 border-solid border-b-green-500 border-l-transparent border-r-transparent"></div>
                
                <div className="px-6">
                    <div className="bg-green-500 p-2 rounded-lg text-white flex flex-col shadow-lg">
                        <p className="font-semibold">{props.curso}</p>
                        <div className="flex flex-row text-sm italic">
                            <p className="mr-6">{props.periodo}</p>
                            <p>{props.local}</p>
                        </div>
                        <p className="mt-2">{props.instituicao}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTimeLine;