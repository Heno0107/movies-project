import { useAppSelector } from "../../../store/hooks"

import { Movie } from '../../ui/movie/movie'

import './movies.css'
export function Movies () {
    const {movies} = useAppSelector((state) => state.movies)

    return (
        <div className="movies">
            {
                movies.map((movie) => {
                    return <Movie movie = {movie} key = {movie.id}/>
                })
            }
        </div>
    )
}