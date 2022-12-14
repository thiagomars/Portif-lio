function Tags(props){
    return(
        <div className="bg-neutral-500/70 mr-2 mb-1 py-1 px-2 rounded-xl shadow-sm origin-bottom-right hover:rotate-3 duration-300 ease-in-out delay-100">
            <p className="font-light whitespace-nowrap text-white text-sm tracking-wider">{props.text}</p>
        </div>
    )
}

export default Tags;