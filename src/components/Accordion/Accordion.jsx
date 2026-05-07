import { AccordionItem } from "./AccordionItem";

const Accordion = ({ values }) => {
 return values?.map ((item) =>(
    <div className="">
        <AccordionItem item={item}/>
    </div>
 ))
};

export default Accordion;
