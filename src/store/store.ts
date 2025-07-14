import { configureStore } from "@reduxjs/toolkit";
import { genresSlice } from "./slices/genresSlice";
import { moviesSlice } from "./slices/moviesSlice";

const store = configureStore({
    reducer : {
        genres : genresSlice.reducer ,
        movies : moviesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store