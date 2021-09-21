import "./FriendForm.css";
import Friend from "../models/Friend";
import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import FriendListRoute from "./FriendListRoute";
interface Props {
  onSubmit: (friend: Friend) => void;
}

const FriendForm = ({ onSubmit }: Props) => {
  const [name, setName] = useState("");
  const [favoriteSong, setFavoriteSong] = useState("");

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const friend: Friend = {
      name: name,
      favoriteSong: favoriteSong,
    };

    onSubmit(friend);
    setName("");
    setFavoriteSong("");
  }
  return (
    <form className="FriendForm" onSubmit={handleFormSubmit}>
      <label htmlFor="FriendForm__name">Name</label>
      <input
        type="text"
        name="FriendForm__name"
        id="FriendForm__name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="FriendForm__song">Favorite Song</label>
      <input
        type="text"
        name="FriendForm__song"
        id="FriendForm__song"
        value={favoriteSong}
        onChange={(e) => setFavoriteSong(e.target.value)}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};
export default FriendForm;
