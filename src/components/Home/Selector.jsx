import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ selectedItem }) => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const reviewsData = [
    { id: 1, title: "1 Google Review 5 stars", price: "5$" },
    { id: 2, title: "5 Google Reviews 5 stars", price: "23$" },
    { id: 3, title: "10 Google Reviews 5 stars", price: "45$" },
    { id: 4, title: "15 Google Reviews 5 stars", price: "70$" },
    { id: 5, title: "20 Google Reviews 5 stars", price: "87.5$" },
  ];

  useEffect(() => {
    setCountries(reviewsData);
    setSelected(reviewsData[0].title + " - " + reviewsData[0].price);
    selectedItem(reviewsData[0].id);
  }, []);

  return (
    <div className="w-72 font-medium h-80 absolute top-10">
      <div
        onClick={() => setOpen(!open)}
        className={` border-purple-400 border-2 w-full p-2 flex items-center justify-between rounded-xl ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 35
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Google Review"}
        <BiChevronDown
          size={20}
          className={`transform ${
            open ? "rotate-180" : ""
          } transition-all duration-500 ease-in-out`}
        />
      </div>
      <ul
        className={`bg-white rounded-xl mt-2 overflow-y-auto ${
          open ? "border-purple-400 border-2 max-h-72" : "max-h-0"
        } `}
      >
        {countries.map((item) => (
          <li
            key={item?.title}
            className={`p-2 text-sm transition relative flex flex-row duration-300 ease-in-out
            hover:bg-purple-400 hover:text-white hover:shadow-md
            ${
              item?.title?.toLowerCase() === selected?.toLowerCase() &&
              "bg-purple-400 text-white"
            }
            ${
              item?.title?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.title?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.title + " - " + item.price);
                selectedItem(item?.id);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.title}
            <div className="w-full">
              <p className="text-right">{item?.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
