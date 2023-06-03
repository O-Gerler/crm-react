import { useLoaderData } from "react-router-dom"
import TarjetaDatos from "../components/TarjetaDatos";
import { obtenerClientes } from "../data/Clientes";

export function loader() {
  return obtenerClientes()
}

const Index = () => {
  const datos = useLoaderData()

  return (
    <>
      <h2 className="font-black text-3xl text-blue-900 capitalize">Clientes</h2>
      <p className="mt-2 capitalize">Administra tus clientes</p>
      <section className="mt-10 flex flex-col gap-5">
        {datos.map(dato => (
          <TarjetaDatos 
            key={dato.id}
            datos={dato}
          />
        ))}
      </section>
    </>
  )
}

export default Index