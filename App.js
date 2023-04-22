import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Blog from "./pages/Blog";
import CONTACT from "./pages/CONTACT";
import CONTACTINITIAL from "./pages/CONTACTINITIAL";
import D from "./pages/D";
import Termsforuser from "./pages/Termsforuser";
import Termsforuser1 from "./pages/Termsforuser1";
import Privacypolicy from "./pages/Privacypolicy";
import Carrer from "./pages/Carrer";
import Carrer1 from "./pages/Carrer1";
import Aboutus from "./pages/Aboutus";
import Homepage from "./pages/Homepage";
import { useEffect } from "react";

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
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/contactinitial":
        title = "";
        metaDescription = "";
        break;
      case "/3d":
        title = "";
        metaDescription = "";
        break;
      case "/termsforuser":
        title = "";
        metaDescription = "";
        break;
      case "/termsforuser1":
        title = "";
        metaDescription = "";
        break;
      case "/privacypolicy":
        title = "";
        metaDescription = "";
        break;
      case "/carrer1":
        title = "";
        metaDescription = "";
        break;
      case "/carrer":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/contact" element={<CONTACT />} />
      <Route path="/contactinitial" element={<CONTACTINITIAL />} />
      <Route path="/3d" element={<D />} />
      <Route path="/termsforuser" element={<Termsforuser />} />
      <Route path="/termsforuser1" element={<Termsforuser1 />} />
      <Route path="/privacypolicy" element={<Privacypolicy />} />
      <Route path="/carrer1" element={<Carrer />} />
      <Route path="/carrer" element={<Carrer1 />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
export default App;
