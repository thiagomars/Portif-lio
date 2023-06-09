import { TbFaceIdError } from "react-icons/tb"


export default function ErrorPage() {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-cyan-400 to-cyan-500 flex flex-col justify-center items-center text-center p-5">
            <TbFaceIdError className="w-56 h-56 text-white drop-shadow" />
            <div className="animate-pulse bg-white shadow-xl rounded-3xl px-10 py-5 my-8 flex items-center">
                <h1 className="text-6xl font-mono font-bold text-cyan-400 drop-shadow">ERROR 404</h1>
            </div>
            <p className="text-white font-semibold text-lg">Eitah! Algo tá errado. O endereço digitado não existe, ok!</p>
            {/* <details>
                <summary>Não sabe o que é um Erro 404? Clica aqui!</summary>
                <p>
                    É uma resposta HTTP que indica que o cliente pôde se comunicar com o servidor, mas o servidor não pôde encontrar o que foi pedido, ou foi configurado para não cumprir o pedido e não revelar a razão, a página não existe mais ou, na maior parte dos casos, a URL foi inserida incorretamente.
                </p>
            </details> */}
        </div>
    )
}