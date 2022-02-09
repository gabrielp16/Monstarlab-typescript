import React, { useState, useEffect } from "react";
import './Home.scss';
import AddFavorites from "../../components/AddFavorites/AddFavorites";
import RemoveFavorites from "../../components/RemoveFavorites/RemoveFavorites";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Searchbox from "../../components/Searchbox/Searchbox";
import { IMovie } from '../../models/IMovieList';
import { getMovies } from '../../api/getMovies';
import { randomCharacter } from '../../helpers/utils';

const Home: React.FC = (): JSX.Element => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [favorites, setFavorite] = useState<IMovie[]>([]);
    const [stringMovie, setSearch] = useState<string>(randomCharacter);

    useEffect(() => {
        getMovies(stringMovie)
            .then(setMovies);
    }, [stringMovie]);

    useEffect(() => {
        const movieFavorites: IMovie[] = JSON.parse(localStorage.getItem('monstar-favorites-movie-list') ?? '');
        const movieFavoritesLocal: IMovie[] = movieFavorites ? movieFavorites : [];
        setFavorite(movieFavoritesLocal);
    }, []);

    const saveToLocalStorage = (items: object) => {
        localStorage.setItem('monstar-favorites-movie-list', JSON.stringify(items));
    };

    const addFavorite = (movie: IMovie) => {
        const getRepeatMovie = favorites.find(favorite => favorite.id === movie.id);
        if (!getRepeatMovie) {
            const favoriteList: IMovie[] = [...favorites, movie];
            setFavorite(favoriteList);
            saveToLocalStorage(favoriteList);
        }
    };

    const removeFavorite = (movie: IMovie) => {
        const favoriteList = favorites.filter(
            (favorites) => favorites.id !== movie.id
        );
        setFavorite(favoriteList);
        saveToLocalStorage(favoriteList);
    };

    return (
        <div className="Home">
            <Header title='Monstar Lab' />
            <div className="wrap-menu">
                <Searchbox setSearch={setSearch} />
                <SubHeader title='Movies' />
            </div>
            <div className="movie-list">
                <MovieList movies={movies} handleFavorites={addFavorite} Favorites={AddFavorites} />
            </div>
            <div className="wrap-menu">
                <SubHeader title='Your favorites movies' />
            </div>
            <div className="favorites-movie-list">
                <MovieList movies={favorites} handleFavorites={removeFavorite} Favorites={RemoveFavorites} />
            </div>
        </div>
    );
}

export default Home;