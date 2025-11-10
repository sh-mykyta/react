import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Sidebar />
    <div style={{ marginLeft: "260px" }}>
      <Header />
<Content />
    </div>
     
        
   
    </>
  );
}

export default App;
