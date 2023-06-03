import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <h1 className='text-6xl text-blue-600 text-center font-bold'>CRM - Clientes</h1>
      <div className='space-y-5 mt-10 text-xl font-semibold text-center'>
        <p className=''>Ha ocurrido el siguiente error: </p>
        <p>{error.statusText || error.message}</p>
      </div>
    </>
    
  )
}

export default ErrorPage