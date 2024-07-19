import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { MoviesService } from '../api/MoviesService';

export const MovieDetails = () => {
    const { movie_id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMoviesById(movie_id);
        setMovie(data.results);
        console.log(data)
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>{movie.overview}</article>
        </>
    )
}