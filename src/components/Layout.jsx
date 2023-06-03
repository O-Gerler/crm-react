import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()

  return (
    <div>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-center text-white font-bold text-3xl">CRM - Clientes</h2>
          <nav className="mt-10 flex flex-col h-56">
            <Link 
              className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-xl mt-2 hover:text-blue-300`}
              to='/'
            >
              Inicio
            </Link>
            <Link 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-xl mt-2 hover:text-blue-300`}
              to='/clientes/nuevo' 
            >
              Nuevo cliente
            </Link>
          </nav>
        </aside>
        <main className=":md: w-3/4 p-10 md:h-screen overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout