const Card = ({ data, mainColor, position, event, eventColor}) => {
    const { name, job, photo,team } = data;
    const deleteCard = () => {
        event(position, team)
    }
    const changeBackgroundCard = (e) => {
        eventColor(e.target.value)
    }
    return (
        <div className="w-80 h-80 rounded-xl overflow-hidden  shadow-lg shadow-black/30 relative flex flex-col items-center justify-center">
            <div style={{ backgroundColor: mainColor }} className="w-full h-1/3" >
                <p onClick={deleteCard} className="w-8 h-8 absolute right-0 mt-4 mr-4 flex justify-center items-center text-white bg-slate-500 transition-colors duration-300 rounded-full cursor-pointer hover:bg-slate-700">X</p>
                <input className="relative top-1 left-2 h-5 bg-transparent cursor-pointer" type="color" value={mainColor} onChange={changeBackgroundCard} />
            </div>
            <div className="bg-white w-full h-2/3 flex flex-col text-center justify-end items-center px-4 pb-8 gap-2">
                <p className="text-xl font-semibold text-indigo-500/95 first-letter:uppercase pb-1.5">{name}</p>
                <p>{job}</p>
            </div>
            <img className="absolute z-10 w-32 h-32 top-10 rounded-full object-center object-cover" src={photo} alt={name} />
        </div>
    )
}
export default Card;