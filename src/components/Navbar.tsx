import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { Input } from "./ui/input"

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-2 text-lg md:text-xl gap-2">
      <img className="rounded-xl w-14" src="/images/logo.png" alt="" />
      <div className="flex space-x-4 items-center">
        <Input placeholder="Search Movies" className="placeholder:size-auto" />
        <ModeToggle />
        <Link to="/" className="font-mono font-bold tracking-tight">Home</Link>
        <Link to="/category" className="font-mono font-bold tracking-tight">Category</Link>
      </div>
    </nav>
  )
}

export default Navbar