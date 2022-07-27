import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge,userCollege) => {
    setUsersList((prev) => {
      const updatedUsersList= [...prev];
      updatedUsersList.unshift( { name: userName, age: userAge , id: Math.random().toString(),college:userCollege })
      return updatedUsersList

    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
