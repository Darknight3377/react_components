import "./App.css";
import Accordion from "./components/Accordion/Accordion";

function App() {
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
    <div className="border-b-black w-1/2">
      <Accordion values={values} />
    </div>
  );
}

export default App;
