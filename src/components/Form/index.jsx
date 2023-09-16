import { useState } from "react";
import Input from "../Input"
import Select from "../Select";
import Button from "../Button"
const Form = ({ title, options, event }) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");
    const sendForm = (e) => {
        e.preventDefault();
        let employee = {
            name,
            job,
            photo,
            team
        };
        event(employee);
    }
    return (
        <form onSubmit={sendForm} className="bg-gray-100 w-11/12 shadow-md mx-auto my-8 p-6 rounded-lg md:w-4/5 md:px-12 md:py-8 lg:w-3/5 lg:px-16 lg:py-10">
            <p className="font-prata text-xl font-medium text-center mb-4 md:text-2xl lg:text-3xl">{title}</p>
            <Input title="Nombre" placeholder="Ingresar su nombre" event={setName} />
            <Input title="Puesto" placeholder="Ingresar su puesto" event={setJob} />
            <Input title="Foto" placeholder="Ingresar enlace de foto" type="url" event={setPhoto} />
            <Select title="Equipo" options={options} event={setTeam} />
            <Button title="Crear" />
        </form>
    );
}
export default Form;