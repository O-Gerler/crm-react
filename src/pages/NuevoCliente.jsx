import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from '../components/Error'
import { agreagarCliente } from "../data/Clientes"

export async function action({ request }) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  // eslint-disable-next-line no-control-regex, no-useless-escape
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

  const errores = []
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios')
  }

  if(!regex.test(email)){
    errores.push('Email no valido')
  }

  if(Object.keys(errores).length){
    return errores
  }

  await agreagarCliente(datos)

  return redirect('/')
}

const NuevoCliente = () => {
  const navigate = useNavigate()
  const errores = useActionData()
  return (
    <>
      <h2 className="font-black text-3xl text-blue-900 capitalize">Nuevo cliente</h2>
      <div className="w-full flex items-center justify-between">
        <p className="mt-2 capitalize">Rellena todos los campos para ingresar un nuevo cliente</p>
        <button 
          type="button" 
          onClick={() => navigate(-1)} 
          className="block py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-bold"
        >
          Volver
        </button>
      </div>
      <Form
        className="bg-white rounded-md shadow-md mt-12 p-8"
        method="POST"
      >
        {errores?.length && errores.map((error, i) => (
          <Error key={i}>{error}</Error>
        ))}
        <Formulario />
        <input 
          type="submit" 
          value="Enviar" 
          className="block w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-bold"
        />
      </Form>
    </>
  )
}

export default NuevoCliente