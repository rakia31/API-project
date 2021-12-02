import React, { useState, useEffect } from "react";
import UserCard from "../Components/UserCard"
import axios from "axios"

const UserList = () => {
  const [User, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsersAxios();
  }, []);

  const getUsersAxios = async () => {
    console.log('i am here...')
    try {
      setIsLoading(true);

      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      
      setUser(result.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div>
      <>
        <h1>Welcome to my UserList</h1>

        {isLoading ? (
          <h3>Loading</h3>
        ) : isError ? (
          <h1>Error To fetching Data</h1>
        ) : User == null ? (
          <h1>"no User matched your search"</h1>
        ) : (
          <div style={{

            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
          

          }} className="Id">
            {User.map((el) => (
              <UserCard User={el} key={el.id} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default UserList;