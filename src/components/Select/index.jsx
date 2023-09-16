const Select = ({ title, options, value, event }) => {
    const sendOption = (e) => {
        value = e.target.value;
        event(value);
    }
    return (
        <div className="flex flex-col mb-4">
            <label className="text-black mb-2 md:font-semibold lg:text-lg">{title}</label>
            <select onChange={sendOption} className="outline-main p-2 rounded-md shadow-sm md:p-4 lg:text-lg" name="team">
                <option defaultValue="">Seleccione un equipo</option>
                {
                    options.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}
export default Select;