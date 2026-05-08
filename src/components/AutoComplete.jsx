import { useEffect, useState } from "react";

export default function AutoComplete() {
  const [productList, setproductList] = useState([]);
  const [input, setInput] = useState('');
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setproductList(data?.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredList = productList?.filter(p => p?.title?.toLowerCase()?.includes(input.toLowerCase()));

  return (
    <>
      <input
        type="text"
        className="p-2 m-2 border border-gray-900 rounded-lg"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
      <div className="p-2 m-2 border border-gray-900 max-h-72 overflow-y-scroll">
      {filteredList?.map((p) => (
        <div>{p.title}</div>
      ))}
      </div>
    </>
  );
}
