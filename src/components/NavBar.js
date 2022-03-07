import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

export default function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <nav>
        {topics.map(({ slug }) => {
          return <Link to={`/${slug}`} key={slug}>{slug} </Link>;
        })}
      </nav>
    </div>
  );
}
