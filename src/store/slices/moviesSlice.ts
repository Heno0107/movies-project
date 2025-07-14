import { createSlice , createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";

import { filmsAPI } from "../../api/api";
import type { GetMoviesResultType, MoviesType } from "../../types/types";

export const getMoviesTC = createAsyncThunk<GetMoviesResultType>(
    'getMoviesTC' ,
    async (lang : any) => {
        const res = await filmsAPI.getMovies(lang)
        return res.data
    }
)
type moviesStateType = {
    movies : Array<MoviesType> ,
    isFetching : boolean
}

const initialState : moviesStateType = {
    movies : [] ,
    isFetching : false
}
export const moviesSlice = createSlice({
    name : 'moviesSlice' ,
    initialState ,
    reducers : {

    } ,
    extraReducers : (builder) => {
        builder.addCase(getMoviesTC.pending , (state) => {
            state.isFetching = true
        })
        builder.addCase(getMoviesTC.fulfilled , (state , action : PayloadAction<GetMoviesResultType>) => {
            state.movies = action.payload.results ,
            state.isFetching = false
        })
    }
})