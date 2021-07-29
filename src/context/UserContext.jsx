import { message } from "antd";
import React, { createContext, useEffect, useState } from "react";
import accountService from "../service/accountService";

export const UserContext = createContext({
  user: localStorage.getItem("user"),
});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user"));
  const [sessionId, setSessionId] = useState(() =>
    localStorage.getItem("session_id")
  );

  useEffect(() => {
    if (sessionId) {
      localStorage.setItem("session_id", sessionId);

      accountService.getDetails().then((data) => {
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
      });
    }
  }, [sessionId]);

  function logout() {
    localStorage.clear();
    message.info("bye!");
    setUser(null);
    setSessionId(null);
  }

  return (
    <UserContext.Provider value={{ user, setUser, setSessionId, logout }}>
      {children}
    </UserContext.Provider>
  );
}
