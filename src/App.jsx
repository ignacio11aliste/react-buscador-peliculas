import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResult from './mocks/no-result.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <h1>Buscador de peliculas</h1>
          <input placeholder='Avengers, The Matrix....' />
          <button type='submit'>Buscar pelicula</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados para esta busqueda</p>
        )}
      </main>
    </div>
  )
}

export default App
