import { MovieCard } from "./MovieCard"

interface ContentProps {
  genresTitle: {
    title: string;
  };
  movieProperty: Array<
    {
      imdbID: string;
      Title: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
    }
  >
}
export function Content({ genresTitle, movieProperty }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genresTitle.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movieProperty.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}