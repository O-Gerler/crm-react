/* eslint-disable react/prop-types */
import {FaUserAlt, FaPhone, FaEnvelope} from 'react-icons/fa'
import {MdFactory} from 'react-icons/md'
import DatoCliente from './DatoCliente'
import {Form, redirect, useNavigate} from 'react-router-dom'
import { eliminarCliente } from '../data/Clientes'

export async function action({params}) {
  await eliminarCliente(params.clienteId)
  return redirect('/')
}

const TarjetaDatos = ({ datos }) => {
  const navigate = useNavigate()
  const { id, nombre, telefono, email, empresa } = datos

  return (
    <div className="flex justify-between items-center shadow-md rounded-md p-6">
      <div>
        <DatoCliente 
          dato={nombre}
          icono={< FaUserAlt/>}
        >
          Nombre
        </DatoCliente>
        <DatoCliente 
          dato={telefono}
          icono={< FaPhone/>}
        >
          Telf
        </DatoCliente>
        <DatoCliente 
          dato={email}
          icono={< FaEnvelope/>}
        >
          Email
        </DatoCliente>
        <DatoCliente 
          dato={empresa}
          icono={< MdFactory/>}
        >
          Empresa
        </DatoCliente>
      </div>
      <div className="space-y-2">
        <button 
          type='button'
          className="block w-full py-2 px-4 bg-blue-800 hover:bg-blue-900 text-white font-bold"
          onClick={() => navigate(`clientes/${id}/editar`)}
        >
          Modificar
        </button>
        <Form
          method='POST'
          action={`/clientes/${id}/eliminar`}
          onSubmit={e => {
            if (!confirm('Estas seguro de que quieres eliminar este cliente?')) {
              e.preventDefault()
            }
          }}
        >
          <button 
            type='submit'
            className="block w-full py-2 px-4 bg-red-800 hover:bg-red-900 text-white font-bold"
          >
            Eliminar
          </button>
        </Form>
      </div>
    </div>
  )
}

export default TarjetaDatos