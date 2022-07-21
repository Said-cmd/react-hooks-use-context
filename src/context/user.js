import React, { useState } from "react";
import user from "../data";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return <UserContext.Provider value={ {user, setUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
