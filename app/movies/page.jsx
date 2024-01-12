
async function getMovies() {

  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e7a532a05b1666b766c13b4296c3562c', {
      next: {
          revalidate: 90 
      }
  })

  const data = await res.json();
  return data.results;
}

export default async function Movies() {

  const movies = await getMovies()

  return (
    <main>
      <h1>
        Discover Movies
      </h1>
      <div className="card-bg">
        {movies.map((movie) => (
          <div key={movie.id} className="card my-5">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt='Dojo Helpdesk logo'
              width={300}
              height={50}
            />
            <h2>{movie.original_title}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
