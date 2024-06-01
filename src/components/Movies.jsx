function ListOfMovies({ movies }) {
    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <p>{movie.released}</p>
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No movies were found for this search</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}