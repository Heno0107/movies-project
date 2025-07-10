import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getGenresTC } from './store/slices/genresSlice'

import './App.css'

function App() {
  const dispatch = useDispatch<any>()
  
  useEffect(() => {
    dispatch(getGenresTC())
  } , [])

  return (

    <>
      
    </>
  )
}

export default App