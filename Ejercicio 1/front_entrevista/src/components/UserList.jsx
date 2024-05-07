import { useState, useEffect } from "react";
import { fetchUsers } from "../services/UserService";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id_usuario} user={user} />
      ))}
    </div>
  );
}
