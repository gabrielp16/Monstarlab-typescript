export interface IMovieList {
    Favorites: React.FC;
    handleFavorites: Function;
    movies: IMovie[];
}

export interface IMovie extends IMovieDetail {
    id: string;
}

export interface IMovieDetail {
    overview?: string;
    poster_path?: string;
    status?: string;
    title?: string;
    vote_average?: string;
}