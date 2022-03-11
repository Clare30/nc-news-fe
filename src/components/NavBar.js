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
      <nav className="navbar navbar-divider">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <LoginButton />
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/">All</Link>
            </div>
            {topics.map(({ slug }) => {
              return (
                <div key={slug} className="navbar-item">
                  <Link to={`/${slug}`} className="navbar-item">
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="navbar-item"></div>
        </div>
      </nav>
    </div>
  );
}
