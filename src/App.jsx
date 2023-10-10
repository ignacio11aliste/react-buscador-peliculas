import responseMovies from './mocks/with-results.json'
import withoutResult from './mocks/no-result.json'
import './App.css'

import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search
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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
