import { useContext } from "react";
import { loggedInUser } from "./context";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user }) {
  const { setLoggedIn } = useContext(loggedInUser);
  const navigate = useNavigate();

  return (
    <button
      className="button is-large is-responsive is-rounded mx-2"
      onClick={() => {
        setLoggedIn(user.username);
        navigate(-1);
      }}
    >
      {user.username}
    </button>
  );
}
