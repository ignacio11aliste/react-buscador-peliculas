import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState, useEffect } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula vacia ')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])
  return { search, updateSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { error, search, updateSearch } = useSearch()

  const handleSubmit = e => {
    e.preventDefaul()
    console.log({ search })
  }

  const handleChange = e => {
    updateSearch(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <h1>Buscador de peliculas</h1>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, The Matrix....'
          />
          <button type='submit'>Buscar pelicula</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
