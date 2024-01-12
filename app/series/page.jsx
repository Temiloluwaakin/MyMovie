async function getSeries() {

  const res = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=e7a532a05b1666b766c13b4296c3562c', {
      next: {
          revalidate: 90 
      }
  })

  const data = await res.json();
  return data.results;
}

export default async function Series() {

  const series = await getSeries()

  return (
    <main>
      <h1>
        Discover Series
      </h1>
      <div className="card-bg">
        {series.map((serie) => (
          <div key={serie.id} className="card my-5">
            <img 
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} 
              alt='Dojo Helpdesk logo'
              width={300}
              height={50}
            />
            <h2>{serie.name}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
