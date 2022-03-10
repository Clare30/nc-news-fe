import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";
import LoginButton from "./LoginButton";

export default function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <LoginButton />
        <Link to="/" className="navlink">
          All
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link to={`/${slug}`} key={slug} className="navlink">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
