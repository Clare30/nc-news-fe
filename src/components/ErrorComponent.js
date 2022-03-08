import { Link } from "react-router-dom";

export default function ErrorComponent({ msg, status }) {
  return (
    <>
      <h2>{status}</h2>
      <h2>{msg}</h2>
      <Link to="/">Back to Home</Link>
    </>
  );
}
