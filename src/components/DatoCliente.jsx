/* eslint-disable react/prop-types */
const DatoCliente = ({ icono, children, dato }) => {
  return (
    <p 
      className="text-lg font-medium flex items-center gap-2"
    >
      {icono}{children}: {dato}
    </p>
  )
}

export default DatoCliente