import "./FriendListRoute.css";
import FriendForm from "./FriendForm";
import { useState } from "react";
import Friend from "../models/Friend";

const FriendListRoute = () => {
  const [friend, setFriends] = useState<Friend[]>([
    {
      name: "Scott",
      favoriteSong: "Ramblin' Man",
    },
    {
      name: "Sara",
      favoriteSong: "Just Dance",
    },
    {
      name: "Chloe",
      favoriteSong: "How Will I Know",
    },
  ]);

  function handleFormSubmit(newFriend: Friend) {
    setFriends((prev) => [...prev, newFriend]);
  }

  return (
    <div className="FriendListRoute">
      <h2>Friends</h2>
      <ul>
        {friend.map((friend) => (
          <li
            key={friend.name}
          >{`${friend.name} (favorite song: ${friend.favoriteSong})`}</li>
        ))}
      </ul>
      <FriendForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FriendListRoute;
