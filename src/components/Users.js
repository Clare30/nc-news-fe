import { useEffect, useState } from "react";
import * as api from "../api";
import UserCard from "./UserCard";

export default function Users({ setLoggedIn }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <section>
      <h1> Login </h1>
      {users.map((user) => {
        return (
          <UserCard key={user.username} user={user} setLoggedIn={setLoggedIn} />
        );
      })}
    </section>
  );
}
