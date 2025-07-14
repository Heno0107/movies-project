import axios from "axios";

import type { GetGenresResultType, GetMoviesResultType } from "../types/types";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a'

export const filmsAPI = {
    getGenres(lang = 'en-US'){
        return instance.get<GetGenresResultType>(`/genre/movie/list?api_key=${apiKey}&language=${lang}`)
    } ,
    getMovies(lang = 'en-US' , pageCount = 1){
        return instance.get<GetMoviesResultType>(`/discover/movie?api_key=${apiKey}&language=${lang}&page=${pageCount}`)
    }
}