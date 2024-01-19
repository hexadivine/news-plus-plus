import React from "react";
import { useState } from "react";

function Sidebar({ element, selectElement, list, searchBy }) {
  const [dynamicList, setDynamicList] = useState(list);

  function improveList(prevElement) {
    if (prevElement == undefined) return;

    const foundElementAt = list.indexOf(prevElement);
    if (foundElementAt > -1) {
      const removedElement = list.splice(foundElementAt, 1)[0];
      list.splice(0, 0, removedElement);
      // update dynamic list only if user is not searching something without this page will rerender on selection of an element afer rendering of searched elements.
      if (dynamicList.length === list.length) setDynamicList(list);
    }
  }

  return (
    <div className="bg-[#390b26]">
      <div className="h-screen bg-[#58585830] text-center">
        <input
          type="text"
          name="search"
          className=" mb-[34px] mt-[60px] h-[50px] w-[150px]  rounded-[10px] border-[1px] bg-[#390b26] px-[20px] py-[10px] text-center placeholder-[#fff]/40 placeholder:text-[14px] placeholder-shown:bg-transparent focus:bg-[#390b26] focus:placeholder-transparent focus:outline-none"
          placeholder={`Search ${searchBy}`}
          onChange={(event) =>
            setDynamicList(
              list.filter((element) =>
                element
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase()),
              ),
            )
          }
        />
        <ul className="no-scrollbar grid max-h-[75dvh] overflow-scroll pb-[30px] pt-[30px] text-center">
          {dynamicList.map((listElement, index) => (
            <li
              className={`relative h-[60px] cursor-pointer list-none  leading-[60px] ${
                element === listElement
                  ? `bg-[#390B26] before:absolute before:block before:size-[30px] before:rounded-[50%] before:bg-transparent after:absolute  after:block after:size-[30px] after:rounded-[50%] after:bg-transparent ${
                      searchBy === "categories"
                        ? "before:right-0 before:top-[-30px] before:shadow-[10px_10px_0px_#390B26] after:right-0 after:shadow-[10px_-10px_0px_#390B26]"
                        : "before:left-0 before:top-[-30px] before:shadow-[-10px_10px_0px_#390B26] after:left-0 after:shadow-[-10px_-10px_0px_#390B26]"
                    }`
                  : ""
              }`}
              key={index}
              onClick={() => {
                improveList(element);
                selectElement(listElement);
              }}
            >
              {listElement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
