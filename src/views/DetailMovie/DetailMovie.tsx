import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { noPoster } from './../../components/MovieList/MovieList';
import './DetailMovie.scss'
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import { IMovieDetail } from '../../models/IMovieList';
import { getMovieById } from '../../api/getMovies'

const DetailMovie: React.FC = (): JSX.Element => {

    const { id = '0' } = useParams();

    const URL = 'https://image.tmdb.org/t/p/w400/';
    const [movie, setMovie] = useState<IMovieDetail>();

    useEffect(() => {
        getMovieById(id)
            .then(setMovie);
    }, []);

    return (
        <>
            <Header title='Monstar Lab' />
            <div className="wrap-menu">
                <SubHeader title='Movie detail' />
            </div>

            <div className='movie-detail'>
                <Link to={`/`}>
                    <button className='go-back'> Go back </button>
                </Link>
                <div className='poster'>
                    <img src={!!movie?.poster_path ? `${URL}${movie.poster_path}` : `${noPoster}`} alt={movie?.title}></img>
                </div>
                <div className='data'>
                    <h1>{movie?.title}</h1>
                    <div className='wrap-info'>
                        <label>Overview:</label>
                        <span>{movie?.overview}</span>
                    </div>
                    <div className='wrap-info'>
                        <label>Vote average:</label>
                        <span>{movie?.vote_average}</span>
                    </div>
                    <div className='wrap-info'>
                        <label>Status:</label>
                        <span>{movie?.status}</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DetailMovie;