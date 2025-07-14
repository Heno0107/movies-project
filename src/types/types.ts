export type GenresType = {
    id : number ,
    name : string
}

export type MoviesType = {
    adult : false ,
    backdrop_path : string ,
    genre_ids : Array<number> ,
    id : number ,
    original_language : string ,
    original_title : string ,
    overview : string ,
    popularity : number ,
    poster_path : string ,
    release_date : string ,
    title : string ,
    video  : boolean ,
    vote_average : number ,
    vote_count : number
}

export type GetGenresResultType = {
    genres : Array<GenresType>
}

export type GetMoviesResultType = {
    page : number ,
    results : Array<MoviesType> ,
    total_pages : number ,
    total_results : number
}