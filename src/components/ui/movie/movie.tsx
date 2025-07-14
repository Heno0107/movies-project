import type { MoviesType } from '../../../types/types'

import './movie.css'

const imgBaseURL = 'https://image.tmdb.org/t/p/w200'

type MoviePropsType = {
    movie : MoviesType
}
export function Movie ({movie} : MoviePropsType) {
    return (
        <div className="movie">
            <img src={imgBaseURL + movie.backdrop_path} alt="" />
            <h3>{movie.title}</h3>
        </div>
    )
}