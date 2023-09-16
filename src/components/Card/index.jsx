const Card = ({ data, mainColor, position, event, eventColor }) => {
    const { name, job, photo, team } = data;
    const deleteCard = () => {
        event(position, team)
    }
    const changeBackgroundCard = (e) => {
        eventColor(e.target.value)
    }
    const activeInput=(e)=>{
         e.target.querySelector('input').click();
    }
    return (
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-xl overflow-hidden  shadow-lg shadow-black/30 relative flex flex-col items-center justify-center">
            <div onClick={activeInput}  style={{ backgroundColor: mainColor }} className="w-full h-1/3 cursor-pointer" >
                <p onClick={deleteCard} className="w-6 h-6 md:w-8  md:h-8 absolute right-0 mt-2 mr-2 md:mt-4  md:mr-4 flex justify-center items-center text-sm md:text-base text-white bg-slate-500 transition-colors duration-300 rounded-full cursor-pointer hover:bg-slate-700">X</p>
                <div className="relative top-4 left-4 overflow-hidden w-8 h-8 rounded-full flex justify-center items-center">
                    <input className="absolute w-10 h-12 bg-transparent cursor-pointer" type="color" value={mainColor} onChange={changeBackgroundCard} />
                </div>
            </div>
            <div className="bg-white w-full h-2/3 flex flex-col text-center justify-end items-center p-4 md:px-8 md:pb-8 gap-2">
                <p className="md:text-xl font-semibold text-indigo-500/95 first-letter:uppercase">{name}</p>
                <p className="text-sm md:text-base">{job}</p>
            </div>
            <img className="absolute z-10 w-24 h-24 top-5 md:w-32  md:h-32  md:top-10 rounded-full object-center object-cover" src={photo} alt={name} />
        </div>
    )
}
export default Card;