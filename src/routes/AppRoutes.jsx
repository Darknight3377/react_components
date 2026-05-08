import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AccordionPage from "../pages/AccordionPage";
import MainLayout from "../layouts/MainLayout";
import ToDoListPage from "../pages/ToDoList";
import ProgressBarPage from "../pages/ProgressBarPage";
import AutoCompletePage from "../pages/AutoCompletePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/todolist" element ={<ToDoListPage/>} />
        <Route path="/progressbar" element ={<ProgressBarPage/>} />
        <Route path="/autocomplete" element ={<AutoCompletePage/>} />
        {/* <Route path="/advanceAcc" element={<AccordionAdvance />} /> */}
      </Route>
    </Routes>
  );
}
