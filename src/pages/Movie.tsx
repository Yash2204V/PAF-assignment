import { MovieMain } from "@/types/MovieMain";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieMain | null>(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) {
    return <div className="w-full h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <>
      <section className="flex flex-col items-center w-full p-2 px-3 md:px-20 lg:px-36 h-fit">
        <div className="w-4/5">
          <img
            className="w-full h-[500px] rounded-lg hidden lg:block"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={`${movie.original_title} backdrop`}
          />
        </div>
        <div className="flex flex-col md:flex-row w-3/4 items-center lg:mt-5">
          <div className="mr-6">
            <div className="shadow-lg rounded-lg">
              <img
                className="rounded-lg w-80"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.original_title} poster`}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <div>
              <h1 className="text-3xl font-semibold">{movie.original_title}</h1>
              <h2 className="italic">{movie.tagline}</h2>
              <div className="flex items-center text-lg space-x-4">
                <span>{movie.vote_average} <i className="fas fa-star" /></span>
                <span>({movie.vote_count} votes)</span>
              </div>
              <div>{movie.runtime} mins</div>
              <div>Release date: {movie.release_date}</div>
            </div>
            <div className="flex space-x-2">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="px-3 py-1 border dark:border-white border-black rounded-full">{genre.name}</span>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold">Synopsis</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 mt-10">Production Companies</h3>
        <div className="w-4/5">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {movie.production_companies.map((company) => (
              company.logo_path && (
                <div key={company.id} className="flex flex-col items-center">
                  <img
                    className="w-[200px] mb-2"
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    alt={`${company.name} logo`}
                  />
                  <span>{company.name}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;