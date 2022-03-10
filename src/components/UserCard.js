import { useContext } from "react";
import { loggedInUser } from "./context";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user, navigation }) {
  const { setLoggedIn } = useContext(loggedInUser);
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          setLoggedIn(user.username);
          navigate(-1);
        }}
      >
        {user.username}
      </button>
    </div>
  );
}
