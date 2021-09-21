import "./SongTableRow.css";
import Song from "../models/Song";
import { Link } from "react-router-dom";

interface Props {
  song: Song;
}

const SongTableRow = ({ song }: Props) => {
  return (
    <tr className="SongTableRow">
      <td>
        <Link to={`/song/${song.id}`}>{song.title}</Link>
      </td>
      <td>{song.artist}</td>
      <td>{song.favorite && <span className="heart">&hearts;</span>}</td>
    </tr>
  );
};

export default SongTableRow;
