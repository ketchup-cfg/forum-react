import { useState } from "react";
import { TopicSidebar } from "./components/TopicSidebar";
import { Navbar } from "./components/Navbar";
import "./index.css";

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(false);

  return (
    <>
      {sidebarIsVisible && (
        <TopicSidebar
          toggleVisibility={() => setSidebarVisibility(!sidebarIsVisible)}
        />
      )}
      <div className={`${sidebarIsVisible ? "ml-64" : "ml-0"}`}>
        <Navbar
          toggleTopicSidebar={() => setSidebarVisibility(!sidebarIsVisible)}
        />
        <main></main>
      </div>
    </>
  );
};

export default App;
