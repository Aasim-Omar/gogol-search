import React, { useState } from "react";
import Routes from "./components/Routes";
import { useResultsContext } from "./context/ResultsContextProvider"

function App() {
  const { darkTheme } = useResultsContext()
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-zinc-900 dark:text-gray-200">
        <Routes />
      </div>
    </div>
  );
}

export default App;
