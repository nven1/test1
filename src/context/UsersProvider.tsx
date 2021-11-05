import React, { createContext, useEffect, useState } from "react";
import postsAPI from "../data_access/PostDataAccess";
import { UserType } from "../types/dataTypes";

export const UsersContext = createContext<UserType[]>([]);

const UsersProvider: React.FC = props => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    postsAPI.getUsers().then(data => processUsers(data));
  }, []);

  const processUsers = (data: UserType[]) => {
    const apiUsers: UserType[] = data.map(user => {
      return { id: user.id, name: user.name, username: user.username };
    });
    setUsers(apiUsers);
  };

  return (
    <UsersContext.Provider value={users}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
