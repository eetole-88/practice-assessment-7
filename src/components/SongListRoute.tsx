import "./SongListRoute.css";
import SongTableRow from "./SongTableRow";
import Song from "../models/Song";

interface Props {
  songs: Song[];
}

const SongListRoute = ({ songs }: Props) => {
  return (
    <div className="SongListRoute">
      <h2>Songs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <SongTableRow song={song} key={song.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongListRoute;
