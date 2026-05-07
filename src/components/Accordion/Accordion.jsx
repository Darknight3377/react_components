import { AccordionItem } from "./AccordionItem";

const Accordion = ({ values }) => {
 return values?.map ((item,i) =>(
    <div className="" key={i}>
        <AccordionItem item={item}/>
    </div>
 ))
};

export default Accordion;
