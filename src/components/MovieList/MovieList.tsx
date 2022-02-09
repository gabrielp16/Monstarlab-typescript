import React from 'react';
import NoPoster from './images/poster-not-available.png'
import './MovieList.scss';
import { Link } from "react-router-dom";

export const noPoster = NoPoster;

interface IProps {
    Favorites: React.FC;
    handleFavorites: Function;
    movies: IMovie[];
}

export interface IMovie {
    id: string;
    vote_average: number;
    poster_path?: string;
    title?: string;
    status?: string;
}

const MovieList: React.FC<IProps> = (props): JSX.Element => {
    const { Favorites, movies } = props;

    const URL = 'https://image.tmdb.org/t/p/w200/';
    const NoMovies = 'No movies to show';
    if (movies.length) {
        return (
            <>
                {
                    movies.map(
                        (movie) => (
                            <div className='movie-card' id={movie.id} key={movie.id}>
                                <span className='rate'>
                                    {(Math.round(movie.vote_average * 100) / 100).toFixed(1)}
                                </span>
                                <div className='layer' onClick={() => props.handleFavorites(movie)}>
                                    <Favorites />
                                </div>
                                <Link to={`/movie/${movie.id}`}>
                                    <img src={!!movie.poster_path ? `${URL}${movie.poster_path}` : `${noPoster}`} alt={movie.title}></img>
                                </Link>
                            </div>
                        )
                    )
                }
            </>
        )
    } else {
        return (
            <>
                <p className='no-movies'>`${NoMovies}`</p>
            </>
        )
    }
};

export default MovieList;