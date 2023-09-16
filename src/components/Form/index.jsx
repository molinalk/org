import { useState } from "react";
import Input from "../Input"
import Select from "../Select";
import Button from "../Button"
const Form = ({ title, options, event,eventTeam }) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("");
    /* Form Team */
    const [nameTeam,setNameTeam]=useState("");
    const [isFormTeam,setIsFormTeam]=useState(false);
    const [mainColor,setMainColor]=useState("");
    const [secondaryColor,setSecondaryColor]=useState("");
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
    const sendFormTeam=(e)=>{
        e.preventDefault();
        let team={
            title:nameTeam,
            mainColor,
            secondaryColor
        }
        eventTeam(team);
    }
    const changeForm = () => {
        setIsFormTeam(!isFormTeam);
    }
    return (
        <form onSubmit={isFormTeam?sendFormTeam:sendForm} className="bg-gray-100 w-11/12 shadow-md mx-auto my-8 mb-0 p-6 rounded-lg md:w-4/5 md:px-12 md:py-8 lg:w-3/5 lg:px-16 lg:py-10 ">
            <p className="font-prata text-xl font-medium text-center mb-4 md:text-2xl lg:text-3xl">{!isFormTeam?title:"Rellena el formulario para crear un equipo."}</p>
            <Input title="Nombre" placeholder={isFormTeam?"Ingresar nombre del equipo":"Ingresar su nombre"} event={isFormTeam?setNameTeam:setName}  value={isFormTeam?nameTeam:name} />
            <Input title={isFormTeam?"Color del fondo":"Puesto"} placeholder={isFormTeam?"Ingresar color del fondo ":"Ingresar su puesto"} event={isFormTeam?setSecondaryColor:setJob} value={isFormTeam?secondaryColor:job}  />
            <Input title={isFormTeam?"Color de los colaboradores":"Foto"} placeholder={isFormTeam?"Ingresar color de los colaboradores":"Ingresar enlace de foto"} type={isFormTeam?"text":"url"} event={isFormTeam?setMainColor:setPhoto} value={isFormTeam?mainColor:photo} />
            { !isFormTeam && <Select title="Equipo" options={options} event={setTeam} />}
            <Button title="Crear" />
            <Button type="button" className="ml-4" event={changeForm} title={isFormTeam?"Crear colaborador":"Crear Equipo"} />
        </form>
    );
}
export default Form;