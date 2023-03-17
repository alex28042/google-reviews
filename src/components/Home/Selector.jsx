import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const reviewsData = [
    { id: 1, title: "1 Google Review 5 stars" },
    { id: 2, title: "5 Google Review 5 stars" },
    { id: 3, title: "10 Google Review 5 stars" },
    { id: 4, title: "15 Google Review 5 stars" },
    { id: 5, title: "20 Google Review 5 stars" },
  ];

  console.log(selected);

  useEffect(() => {
    setCountries(reviewsData)
  }, [])

  return (
    <div className="w-72 font-medium h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-slate-200 w-full p-2 flex items-center justify-between rounded-xl ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Google Review"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-slate-200 rounded-xl mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {countries.map((item) => (
          <li
            key={item?.title}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              item?.title?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              item?.title?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.title?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.title);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;