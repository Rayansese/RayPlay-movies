import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'

// 1. Get the API Key from your .env file
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function App() {
  const [theme, setTheme] = useState('dark')
  const [movies, setMovies] = useState([]); // Start with an empty list
  const [loading, setLoading] = useState(true); // Track if data is still loading
  const [page, setPage] = useState(1);


  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // 2. The "Brains": This runs automatically when the app starts
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
        const data = await response.json();

        // 3. Transform TMDB data to match our <Card /> format
        const formattedMovies = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          year: movie.release_date?.split('-')[0] || 'N/A',
          rating: movie.vote_average?.toFixed(1) || '0.0',
          image: movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750',
          genre: "Movie"
        }));

        setMovies(formattedMovies);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setLoading(false);
      }
    };

    getMovies();
  }, [page]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'light' ? 'lightMode' : ''} light:bg-[#f8fafc]`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-24 px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white light:text-slate-900 mb-2">Popular Movies</h2>
          <p className="text-gray-400 light:text-slate-500">Live data from TMDB</p>
        </div>

        {/* 4. Show a loading spinner if the data isn't ready yet */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1ecad3]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-8 justify-center">
          {page > 1 && (
            <button 
              className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-600 transition-colors" 
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
          )}
          <button 
            className="bg-[#1ecad3] text-white px-6 py-2 rounded-lg hover:bg-[#19bac3] transition-colors" 
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
        </div>

      </main>
    </div>
  )
}

export default App
