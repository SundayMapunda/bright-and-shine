import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import App from "./App";
import Suits from "./pages/Suits";
import OfficialShoes from "./pages/OfficialShoes";
import Watches from "./pages/Watches";
import ErrorPage from "./pages/ErrorPage";
import Dress from "./pages/Dress";

const routes = createRoutesFromElements(
  <>
    <Route path="/bright-and-shine/" element={<MainLayout />}>
      <Route index element={<App />} />
      <Route path="/bright-and-shine/suits" element={<Suits />} />
      <Route
        path="/bright-and-shine/officialshoes"
        element={<OfficialShoes />}
      />
      <Route path="/bright-and-shine/watches" element={<Watches />} />
      <Route path="/bright-and-shine/dress" element={<Dress />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </>
);

export default routes;
