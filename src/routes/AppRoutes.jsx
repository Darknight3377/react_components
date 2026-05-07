import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AccordionPage from "../pages/AccordionPage";
import MainLayout from "../layouts/MainLayout";
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<AccordionPage />} />
        {/* <Route path="/advanceAcc" element={<AccordionAdvance />} /> */}
      </Route>
    </Routes>
  );
}
