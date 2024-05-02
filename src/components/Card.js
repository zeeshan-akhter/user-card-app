import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            src={user.picture.large}
            alt="User"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-2xl text-gray-600 dark:text-gray-200 font-bold">
              {user.name.first} {user.name.last}
            </h1>
            <p className="text-lg text-gray-400">{user.gender}</p>
            <a
              href="mailto:laura.woods@example.com"
              className="text-lg text-gray-500 dark:text-gray-200 "
            >
              {user.email}
            </a>
            <p className="text-lg text-gray-400">
              {user.location.city}, {user.location.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
