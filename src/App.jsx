import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  
  return(
    <><h1>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    </h1>
    </>
  )
}

export default App
