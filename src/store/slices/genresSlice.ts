import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const getGenresTC = createAsyncThunk(
    'getGenresTC' ,
    async (_ , {dispatch}) => {
        const res = await filmsAPI.getGenres()
        return res.data
    }
)

export const genresSlice = createSlice({
    name : 'genresSlice' ,
    initialState : {
        genres : [] ,
        isFetching : false
    } ,
    reducers : {

    } ,
    extraReducers : (builder) => {
        builder.addCase(getGenresTC.pending , (state) => {
            state.isFetching = true
        })
        builder.addCase(getGenresTC.fulfilled , (state , action) => {
            state.genres = action.payload.genres
            state.isFetching = false
        })
    }
})