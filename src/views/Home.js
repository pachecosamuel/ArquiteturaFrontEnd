import { MoviesList } from "../components/Movies/MoviesList"
import { MoviesContainer } from "../components/Movies/MovieContainer"
import { useEffect, useState } from 'react';
import { MoviesService } from '../api/MoviesService';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return(
        <MoviesContainer>

            <MoviesList movies={movies} />

        </MoviesContainer>
    )
};