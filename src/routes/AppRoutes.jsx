import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Accordion from "../components/Accordion/Accordion";
import AccordionAdvance from "../components/AccordionAdvanced/Accordion";
export default function AppRoutes() {
  const values = [
    {
      title: "Accordion title 1",
      content: "This is a content of accordion 1",
    },
    {
      title: "Accordion title 2",
      content: "This is a content of accordion 2",
    },
    {
      title: "Accordion title 3",
      content: "This is a content of accordion 3",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accordion" element={<Accordion values={values} />} />
      <Route path="/advanceAcc" element={<AccordionAdvance />} />
    </Routes>
  );
}
