import { useState, useEffect } from "react";

const User = ({ userPromise }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userPromise.then((data) => {
      setUser(data);
    });
  }, [userPromise]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="border border-red-500 p-2">
      <img src={user.photo} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default User;
