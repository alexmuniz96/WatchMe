import { Button } from "./Button";

interface GenresProps {
  genres: [
    {
      id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
    }
  ],
  selectById: number;
  setSelectedGenreId: (id: number) => void;

}

export function SideBar({ genres, selectById, setSelectedGenreId }: GenresProps) {

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectById === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
