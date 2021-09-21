import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Song from "../models/Song";
import "./SongRoute.css";
import { songs } from "./songs";

interface RouteParams {
  id: string;
}

const SongRoute = () => {
  const { id } = useParams<RouteParams>();
  const numberId = parseInt(id);
  const song = songs.find((eachSong) => eachSong.id === numberId);
  return (
    <div className="SongRoute">
      <h2>Song: {song?.title}</h2>
      <p>Artist: {song?.artist}</p>
      <p>Favorite:{song?.favorite ? " yes" : " no"}</p>
    </div>
  );
};
export default SongRoute;
