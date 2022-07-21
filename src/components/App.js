import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user"

function UserProvider({ children }) {
  const currentUser = {
    name: "Duane",
    interests: ["Coding", "Biking", "Words ending in 'ing'"],
  };
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <main className={theme}>
      <UserProvider>
      <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
      <Profile theme={theme} user={user} />
    </UserProvider>
    </main>
  );
}

export default App;
