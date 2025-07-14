import { useAppDispatch, useAppSelector } from '../../../store/hooks'

import logo from '../../../assets/logo/movie-logo.avif'
import { getGenresTC } from '../../../store/slices/genresSlice'
import { getMoviesTC } from '../../../store/slices/moviesSlice'

import './nav.css'

export function Nav () {
    const {genres} = useAppSelector((state) => state.genres)
    const dispatch = useAppDispatch()

    const languageChange = (lang : any) : void => {
        dispatch(getGenresTC(lang))
        dispatch(getMoviesTC(lang))
    }

    return (
        <nav>
            <img src={logo} alt="" className='logo'/>
            <div className="genres">
                {
                    genres.map((genre) => {
                        return <button key={genre.id} className='genreBtn'>{genre.name}</button>
                    })
                }
            </div>
            <select onChange={(e) => languageChange(e.target.value)}>
                <option value="en-US">ENG</option>
                <option value="ru-RU">RUS</option>
            </select>
        </nav>
    )
}