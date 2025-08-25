import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MainRoutes from "./routes/MainRoutes";
import CustomCursor from "./components/globalComp/CustomCursor";


function App() {
  const location = useLocation();
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontReady(true));
  }, []);

  if (!fontReady) {
    return <div className="flex items-center justify-center h-screen absolute w-screen z-10">
      Loading......
    </div>;
  }

  return (
    <>
      <MainRoutes />
      <CustomCursor />
      {!location.pathname.includes("/productinfo") && <Nav />}
    </>
  );
}

export default App;
