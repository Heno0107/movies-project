import { createSlice , createAsyncThunk , type PayloadAction } from "@reduxjs/toolkit";

import { filmsAPI } from "../../api/api";
import type { GenresType } from "../../types/types";

export const getGenresTC = createAsyncThunk<Array<GenresType>>(
    'getGenresTC' ,
    async (lang : any) => {
        const res = await filmsAPI.getGenres(lang)
        return res.data.genres
    }
)
type GenresInitialStateType = {
    genres : Array<GenresType> ,
    isFetching : boolean
}

const initialState : GenresInitialStateType = {
    genres : [] ,
    isFetching : false
}

export const genresSlice = createSlice({
    name : 'genresSlice' ,
    initialState ,
    reducers : {
        
    } ,
    extraReducers : (builder) => {
        builder.addCase(getGenresTC.pending , (state) => {
            state.isFetching = true
        })
        builder.addCase(getGenresTC.fulfilled , (state , action : PayloadAction<Array<GenresType>>) => {
            state.genres = action.payload
            state.isFetching = false
        })
    }
})