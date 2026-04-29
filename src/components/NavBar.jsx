import { NavLink } from "react-router-dom"
import { PlusIcon } from "lucide-react"

const NavBar = () => {
  return (
    <header className="navbar bg-slate-900 py-8">
        <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between">
            <NavLink className="text-3xl font-bold text-white" to={"/"}>Notes App</NavLink>        
            <NavLink className="btn btn-soft btn-primary font-bold" to={"/createNote"}><PlusIcon/>Crear una nota</NavLink>
        </div>
    </header>
  )
}

export default NavBar
