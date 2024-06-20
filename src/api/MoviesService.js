import axios from "axios";

const base_url = 'https://api.themoviedb.org/3/movie';
const url_popular_movies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDE1OWYxOTgzYjIwOGNlMDIzZDZlZmViMWEwZWYxYiIsInN1YiI6IjY2NzE5N2FlZGQ4ZGI0NjU1MmYyZmUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ntvqGzByF_hFou9cm4JaLbpeOHEeMLT-tt_JaNy0';
const movie_detail = `https://api.themoviedb.org/3/movie/${movie_id}`;

export class MoviesService {
    static getMovies() {
        return axios(url_popular_movies, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'accept': 'application/json'
            },
        })}
        
    static getMoviesById(movie_id) {
        return axios(movie_detail(movie_id), {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'accept': 'application/json'
            },
        })
    }
}


