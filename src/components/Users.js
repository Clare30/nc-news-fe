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
    <div>
      <h1 className="has-text-weight-bold"> Login </h1>
      <div className="mt-5 block">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} setLoggedIn={setLoggedIn} />;
        })}
      </div>
    </div>
  );
}
