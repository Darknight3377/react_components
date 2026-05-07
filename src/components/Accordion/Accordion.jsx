import { AccordionItem } from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ values }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndexChange = (index) => {
    setActiveIndex(prev => prev === index ? null : index);
  }

  return values?.map((item, i) => (
    <div className="border border-gray-800 m-2 p-2 rounded-lg" key={i}>
      <AccordionItem
        item={item}
        isOpen={activeIndex === i}
        currentIndex={i}
        setActiveIndex={handleIndexChange}
      />
    </div>
  ));
};

export default Accordion;
