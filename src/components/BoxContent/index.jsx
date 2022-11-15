function BoxContent(props){

    function verificNivel(){
        if (props.value == "1")
            return "Básico";

        if (props.value == "2")
            return "Intermediário";

        if (props.value == "3")
            return "Avançado";

        return null;
    }


    function progress(){
        if(props.value == "1")
            return (
                <div className="my-4 mb-2 w-full h-2 rounded-full bg-gray-200 flex flex-row items-center justify-between">
                    <div className="h-2 w-1/2 rounded-tl-full rounded-bl-full flex flex-row items-center justify-start bg-gray-200">
                        <div className="rounded-full h-4 w-4 bg-green-500"></div>
                    </div>    
                    <div className="z-20 -mx-2 rounded-full h-4 w-4 bg-gray-200"></div>
                    <div className="h-2 w-1/2 rounded-tr-full rounded-br-full flex flex-row items-center justify-end bg-gray-200">
                        <div className="rounded-full h-4 w-4 bg-gray-200"></div>
                    </div>    
                </div>
            )
        
        if(props.value == "2")
            return (
                <div className="my-4 mb-2 w-full h-2 rounded-full bg-gray-200 flex flex-row items-center justify-between">
                    <div className="h-2 w-1/2 rounded-tl-full rounded-bl-full flex flex-row items-center justify-start bg-green-500">
                        <div className="rounded-full h-4 w-4 bg-green-500"></div>
                    </div>    
                    <div className="z-20 -mx-2 rounded-full h-4 w-4 bg-green-500"></div>
                    <div className="h-2 w-1/2 rounded-tr-full rounded-br-full flex flex-row items-center justify-end bg-gray-200">
                        <div className="rounded-full h-4 w-4 bg-gray-200"></div>
                    </div>    
                </div>
            )

        if(props.value == "3")
            return (
                <div className="mt-4 mb-2 w-full h-2 rounded-full bg-gray-200 flex flex-row items-center justify-between">
                    <div className="h-2 w-1/2 rounded-tl-full rounded-bl-full flex flex-row items-center justify-start bg-green-500">
                        <div className="rounded-full h-4 w-4 bg-green-500"></div>
                    </div>    
                    <div className="z-20 -mx-2 rounded-full h-4 w-4 bg-green-500"></div>
                    <div className="h-2 w-1/2 rounded-tr-full rounded-br-full flex flex-row items-center justify-end bg-green-500">
                        <div className="rounded-full h-4 w-4 bg-green-500"></div>
                    </div>    
                </div>
            )
        
        return null;
    }

    return(
        <div className="w-1/5 h-min max-w-fit min-w-min my-4 mx-3 p-3 text-sm bg-white rounded-xl shadow-md">
            {props.text}

            {progress()}
            <div className="w-full flex" style={{ justifyContent : (props.value == "1" ? "start" : (props.value == "2" ? "center" : "end")) }}>
                <div className="text-white bg-green-500 w-min py-1 px-2 rounded-md text-xs font-semibold">
                    {verificNivel()}
                </div>
            </div>
        </div>
    )
}

export default BoxContent;