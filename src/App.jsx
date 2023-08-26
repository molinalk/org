import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import btn from './assets/btn_add.png'
//import Footer from './components/Footer'
function App() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const viewForm = () => {
    setIsFormVisible(!isFormVisible)
  }
  return (
    <>
      <Header />
      <main>
        {isFormVisible && <section className='py-px'><Form title="Rellena el formulario para crear el colaborador."/></section>}
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-evenly w-11/12 mx-auto my-16 lg:w-3/5">
            <h2 className="font-prata  text-indigo-500/95 text-2xl font-medium pb-2 border-b-2 border-indigo-500/95 lg:text-4xl lg:pb-4 lg:border-b-4">Mi organizazacion</h2>
            <img className="w-16  hover:cursor-pointer lg:w-20 " onClick={viewForm} src={btn} alt="add_colaborator" />
          </div>
          <div className="grid">
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App
