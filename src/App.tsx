import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import { getGenresTC } from './store/slices/genresSlice'
import { getMoviesTC } from './store/slices/moviesSlice'
import { Home } from './pages/home/home'

import './App.css'

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getGenresTC())
    dispatch(getMoviesTC())
  } , [])

    return (

    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App