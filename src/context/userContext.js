import React from "react";
import useLocalStorage from "./../hooks/useLocalStorage";

const UserContext = React.createContext();

function UserContextProvider(props) {
  const [user, setUser] = useLocalStorage("cohatch_user", {});
  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
