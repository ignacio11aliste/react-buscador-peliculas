import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {
  const { movies } = useMovies()
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
