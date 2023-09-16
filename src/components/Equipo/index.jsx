import Card from '../Card'
import { useState } from 'react';
const Equipo = ({ data, employees, event }) => {
    const { title, mainColor, secondaryColor } = data;
    const [background,setBackground]=useState(secondaryColor);
    const [backgroundCard,setBackgroundCard]=useState(mainColor);
    const changeBackground=(e)=>{
        setBackground(e.target.value)
    }
    return (
        <>
            {
                employees.length > 0 && <section style={{ backgroundColor: background }} className="p-8  relative">
                    <div className="flex justify-center items-center flex-col gap-8">
                        <h2 style={{ borderBottomColor: backgroundCard }} className="text-2xl md:text-3xl font-prata py-4 border-b-4">{title}</h2>
                        <input className="absolute left-4 top-4 cursor-pointer w-16 md:w-24 bg-transparent" type="color" value={background} onChange={changeBackground}/>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            {
                                employees.map((employee, index) => {
                                    return <Card key={index} position={index} data={employee} event={event} eventColor={setBackgroundCard} mainColor={backgroundCard} />
                                })
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
export default Equipo;