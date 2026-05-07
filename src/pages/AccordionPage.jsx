import Accordion from "../components/Accordion/Accordion";

export default function AccordionPage() {
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

  return(
    <div>
        <h1>Accordion Component</h1>
        <Accordion values={values}/>
    </div>
  )
}
