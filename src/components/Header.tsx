import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { Input } from "./ui/input"
import { useEffect } from "react"
import axios from "axios"
import { useRecoilState, useSetRecoilState } from "recoil"
import { searchedMoviesAtom, searchQueryAtom } from "@/stores/atom"
import { useDebounce } from "@/hooks/useDebounce"

const Header = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
  const setSearchedMovies = useSetRecoilState(searchedMoviesAtom);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es&query=${debouncedSearchQuery}`)
        .then(response => setSearchedMovies(response.data.results))
        .catch(err => console.error(err));
    } else {
      setSearchedMovies([]);
    }
  }, [debouncedSearchQuery]);



  return (
    <header className="p-2 px-3 md:px-20 lg:px-36 h-fit">
      <nav className="w-full flex justify-between items-center py-2 text-lg md:text-xl gap-2">
        <img className="rounded-xl w-14" src="/images/logo.png" alt="" />
        <div className="flex space-x-4 items-center">
          <Input placeholder="Search Movies" className="placeholder:size-auto" value={searchQuery} onChange={(e)=>{
            setSearchQuery(e.target.value)
          }} />
          <ModeToggle />
          <Link to="/" className="font-mono font-bold tracking-tight">Home</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header