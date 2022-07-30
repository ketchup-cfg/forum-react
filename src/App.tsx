import { useState } from "react";
import styles from "./App.module.css";
import { TopicSidebar } from "./components/TopicSidebar";

const App = () => {
  const [sidebarIsVisible, setSidebarVisibility] = useState(true);
  return (
    <div className={styles.appContainer}>
      {sidebarIsVisible && <TopicSidebar />}
      <main>
        <button
          type="button"
          onClick={() => setSidebarVisibility(!sidebarIsVisible)}
        >
          {sidebarIsVisible ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </main>
    </div>
  );
};

export default App;
