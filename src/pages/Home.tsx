import { Card  } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Navbar from "@/components/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Img } from 'react-image';
import { Input } from "@/components/ui/input"

// {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count}
const Home = () => {

  interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  const [popularMovies, setPopularMovies] = useState<Movie[]>([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])
  console.log(popularMovies);



  return (
    <>
      <header className="p-2 px-3 md:px-20 lg:px-36 h-fit">
        <Navbar />
        <section>
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
      </header>
      <section className="w-full p-2 px-3 md:px-20 lg:px-36 h-screen mt-10 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight mb-5">Movies</h1>
        <Input placeholder="Search Movies" className="flex justify-end w-full mb-7 placeholder:text-base px-7" />
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {popularMovies.map((movie) => {
            const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
            return (
              <Link to={`/movie/:${movie.id}`}>
                <div className={`bg-cover bg-center w-40 h-60 text-4xl shadow-2xl border-2 border-white rounded-xl`}
                style={{ backgroundImage: `url(${imageUrl})` }}>
                  <div className="text-sm h-full flex flex-col justify-end p-2 bg-black bg-opacity-70 rounded-xl ">
                    <h1 className="text-lg font-bold text-white">{movie.title}</h1>
                    <p className="text-sm text-white">{movie.release_date}</p>
                  </div>
                </div>
              </Link>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default Home