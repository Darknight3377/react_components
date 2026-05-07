import { AccordionItem } from "./AccordionItem";

const Accordion = ({ values }) => {
 return values?.map ((item,i) =>(
    <div className="border border-gray-800 m-2 p-2 rounded-lg" key={i}>
        <AccordionItem item={item}/>
    </div>
 ))
};

export default Accordion;
