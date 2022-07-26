import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Inicio from "./views/inicio";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
