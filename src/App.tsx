import { useState } from "react";
import { TopicSidebar } from "./components/TopicSidebar";
import { Navbar } from "./components/Navbar";
import "./index.css";

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(false);

  return (
    <>
      {sidebarIsVisible && (
        <TopicSidebar closeTopicSidebar={() => setSidebarVisibility(false)} />
      )}
      <div
        data-testid="app-content"
        className={`${sidebarIsVisible ? "ml-64" : "ml-0"}`}
      >
        <Navbar
          toggleTopicSidebar={() => setSidebarVisibility(!sidebarIsVisible)}
        />
        <main
          className="min-h-screen"
          onClick={() => setSidebarVisibility(false)}
        ></main>
      </div>
    </>
  );
};

export default App;