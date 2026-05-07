import { useState } from "react";

export const AccordionItem = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="">
          <div className="flex justify-between">
            <h1>{item.title}</h1>
            <button onClick={()=> setIsOpen(!isOpen)}>🔽</button>
          </div>
          {isOpen && <div>{item.content}</div>}
        </div>
      );
}