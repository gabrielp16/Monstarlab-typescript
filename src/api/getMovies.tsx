import { IMovie } from '../models/IMovieList';
import { randomCharacter } from '../helpers/utils';

export const getMovies = async (searchString: string) => {
    if (!searchString) {
        searchString = randomCharacter
    }
    const url = `https://api.themoviedb.org/3/search/movie?api_key=f7cc4d429cde54acb717c8d20a5a4109&query=${encodeURI(searchString)}`;
    const response = await fetch(url);
    const { results } = await response.json();

    const movies = results.map((movie: IMovie) => {
        return {
            id: movie.id,
            overview: movie.overview,
            poster_path: movie.poster_path,
            status: movie.status,
            title: movie.title,
            vote_average: movie.vote_average
        }
    });
    return movies;
}

export const getMovieById = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=f7cc4d429cde54acb717c8d20a5a4109`;
    const response = await fetch(url);
    const movie = await response.json();

    return movie;
}