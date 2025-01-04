import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Movie } from '@/types/Movie';
import { popularMoviesAtom, searchedMoviesAtom } from '@/stores/atom';

const Cards = () => {
    const [popularMovies, setPopularMovies] = useRecoilState<Movie[]>(popularMoviesAtom);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const searchedMovies = useRecoilValue(searchedMoviesAtom);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
                const newMovies = response.data.results;
                if (newMovies.length === 0) {
                    setHasMore(false);
                }
                setPopularMovies((prevMovies) => [...prevMovies, ...newMovies]);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchMovies();
    }, [page]);

    useEffect(() => {
        setPopularMovies([]);
        setPage(1);
        setHasMore(true);
    }, []);

    const moviesToDisplay = searchedMovies && searchedMovies.length > 0 ? searchedMovies : popularMovies;

    return (
        <InfiniteScroll
            dataLength={moviesToDisplay.length}
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more movies to load.</p>}
            scrollThreshold={0.9}
        >
            <div className='flex flex-wrap gap-2 items-center justify-center'>
                {moviesToDisplay.map((movie) => {
                    const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
                    return (
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <div
                                className={`bg-cover bg-center w-40 h-60 text-4xl shadow-2xl border-2 border-white rounded-xl`}
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            >
                                <div className="text-sm h-full flex flex-col justify-end p-2 bg-black bg-opacity-70 rounded-xl">
                                    <h1 className="text-lg font-bold text-white">{movie.title}</h1>
                                    <p className="text-sm text-white">{movie.release_date}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </InfiniteScroll>
    );
};

export default Cards;
