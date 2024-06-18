import axios from "axios";

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDE1OWYxOTgzYjIwOGNlMDIzZDZlZmViMWEwZWYxYiIsInN1YiI6IjY2NzE5N2FlZGQ4ZGI0NjU1MmYyZmUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b14ntvqGzByF_hFou9cm4JaLbpeOHEeMLT-tt_JaNy0';

export class MoviesService {
    static getMovies() {
        return axios(url, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'accept': 'application/json'
            },
        })
    }
}


