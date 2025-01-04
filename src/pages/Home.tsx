import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Img } from 'react-image';
import { Input } from "@/components/ui/input"
import Cards from "@/components/Cards"
import { Card } from "@/components/ui/card"
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { popularMoviesAtom, searchedMoviesAtom, searchQueryAtom } from "@/stores/atom";
import { useDebounce } from "@/hooks/useDebounce";

const Home = () => {

  const [popularMovies, setPopularMovies] = useRecoilState(popularMoviesAtom);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
  const setSearchedMovies = useSetRecoilState(searchedMoviesAtom);
  const debouncedSearchQuery = useDebounce(searchQuery, 2000);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      .then(response => setPopularMovies(response.data.results))
      .catch(err => console.error(err));
  }, [])

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
    <>
      <section className="p-2 px-3 md:px-20 lg:px-36 h-fit">
        <Carousel plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]} className="w-full max-w-sm md:max-w-7xl mx-auto mt-10 lg:mt-2">

          <CarouselContent className="-ml-1">
            {popularMovies.map((movie) => {
              return (<CarouselItem
                key={movie.id}
                className="basis-full" >
                <div className="">
                  <Card>
                    <Link to={`/movie/${movie.id}`}>
                      <div className="flex items-center justify-center">
                        <Img className="rounded-xl w-full h-full object-cover"
                          src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                          loader={<div>Loading...</div>}
                          alt="Description"
                        />
                      </div>
                      <div className="p-2 rounded-xl w-full h-full flex flex-col justify-center">
                        <h1 className="text-xl lg:text-3xl font-bold ">{movie.title}</h1>
                        <p className="text-lg lg:text-2xl ">{movie.release_date}</p>
                      </div>
                    </Link>
                  </Card>
                </div>
              </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="w-full p-2 px-3 md:px-20 lg:px-36 h-screen mt-10 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight mb-5">Movies</h1>
        <Input placeholder="Search Movies" className="flex justify-end w-full mb-7 placeholder:text-base px-7" onChange={(e) => {
          setSearchQuery(e.target.value)
        }} />
        
        <div className="flex flex-wrap gap-2 items-center justify-center">
          <Cards />
        </div>
      </section>
    </>
  )
}

export default Home