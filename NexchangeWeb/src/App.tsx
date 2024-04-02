import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Frame from "./pages/Frame";
import PROFILOUTENTE from "./pages/PROFILOUTENTE";
import Container from "./pages/Container";
import Frame1 from "./pages/Frame1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/profilo-utente":
        title = "";
        metaDescription = "";
        break;
      case "/container":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/frame-1" element={<Frame />} />
      <Route path="/profilo-utente" element={<PROFILOUTENTE />} />
      <Route path="/container" element={<Container />} />
      <Route path="/frame-3" element={<Frame1 />} />
    </Routes>
  );
}
export default App;
