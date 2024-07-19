import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDE1OWYxOTgzYjIwOGNlMDIzZDZlZmViMWEwZWYxYiIsInN1YiI6IjY2NzE5N2FlZGQ4ZGI0NjU1MmYyZmUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ntvqGzByF_hFou9cm4JaLbpeOHEeMLT-tt_JaNy0';

const url_popular_movies =  `${BASE_URL}/popular?language=en-US&page=1`;

export class MoviesService {
    static getMovies() {
        return axios(url_popular_movies, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'accept': 'application/json'
            },
        })}
        
    static getMoviesById(movie_id) {
        const movie_detail_url = `${BASE_URL}/${movie_id}`;

        return axios(movie_detail_url, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'accept': 'application/json'
            },
        })
    }
}


