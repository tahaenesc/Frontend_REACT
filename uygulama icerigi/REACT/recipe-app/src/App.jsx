import React, { useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import "./App.css";
import { ApiContextProvider } from "./context/ApiContext";

import { UserPreferencesContext } from "./context/UserPreferencesContext";

function App() {
  const { theme } = useContext(UserPreferencesContext);

  return (
    <div className={`App ${theme} `}>
      <NavigationBar />
      <ApiContextProvider>
        <Home />
        <RecipeList />
      </ApiContextProvider>
    </div>
  );
}

export default App;
