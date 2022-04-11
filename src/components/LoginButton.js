import { useContext } from "react";
import { loggedInUser } from "./context";
import { Link } from "react-router-dom";

export default function LoginButton() {
  const { loggedIn } = useContext(loggedInUser);

  return loggedIn.length <= 0 ? (
    <Link className="has-text-light navbar-item" to="/login">
      Login
    </Link>
  ) : (
    <Link className="has-text-light navbar-item" to="/login">
      Logged in as: {loggedIn}
    </Link>
  );
}
