
export const AccordionItem = ({item, currentIndex, isOpen, setActiveIndex}) => {

    const handleClick = () => {
        setActiveIndex(currentIndex);
    }
    return(
        <div className="">
          <div className="flex justify-between">
            <h1>{item.title}</h1>
            <button onClick={handleClick}>{!isOpen ?'🔽':'🔼'}</button>
          </div>
          {isOpen && <div>{item.content}</div>}
        </div>
      );
}