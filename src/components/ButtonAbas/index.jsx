import * as Tabs from "@radix-ui/react-tabs"

export default function ButtonAbas({ children, defaultValue }) {

    return (
        <Tabs.Root defaultValue={defaultValue.replaceAll(" ", "_")} >
            {children}
        </Tabs.Root>
    )
}

ButtonAbas.Titulos = ({ titulos }) => {

    return (
        <Tabs.List className="overflow-hidden bg-white shadow-md rounded-md text-sm md:flex md:flex-row">
            {!!titulos && titulos.map((value, index) => {
                return (
                    <Tabs.Trigger 
                        key={value.replaceAll(" ", "_") + "_tituloAba"} 
                        value={value.replaceAll(" ", "_")}
                        className="w-full bg-white py-2 px-4 md:data-[state=active]:text-indigo-600 data-[state=active]:bg-indigo-600 data-[state=active]:text-white md:data-[state=active]:bg-white data-[state=active]:border-b-2  data-[state=active]:border-indigo-600"
                    >
                            {value}
                    </Tabs.Trigger>
                )
            })}
        </Tabs.List>
    )
}

ButtonAbas.Conteudo = ({ children, value }) => {

    return (
        <Tabs.Content 
            value={value.replaceAll(" ", "_")}
            className="mt-5 bg-white rounded-md overflow-hidden shadow-md"
        >
                {children}
        </Tabs.Content>
    )
}