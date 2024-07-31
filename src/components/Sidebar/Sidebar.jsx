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
          className=" mb-[3.4rem] mt-[6rem] h-[5rem] w-[15rem]  rounded-[1rem] border-[0.1rem] bg-[#390b26] px-[2rem] py-[1rem] text-center placeholder-[#fff]/40 placeholder:text-[14px] placeholder-shown:bg-transparent focus:bg-[#390b26] focus:placeholder-transparent focus:outline-none"
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
        <ul className="no-scrollbar grid max-h-[75dvh] overflow-scroll pb-[3rem] pt-[3rem] text-center">
          {dynamicList.map((listElement, index) => (
            <li
              className={`relative h-[6rem] cursor-pointer list-none  leading-[6rem] ${
                element === listElement
                  ? `bg-[#390B26] before:absolute before:block before:size-[3rem] before:rounded-[50%] before:bg-transparent after:absolute  after:block after:size-[3rem] after:rounded-[50%] after:bg-transparent ${
                      searchBy === "categories"
                        ? "before:right-0 before:top-[-3rem] before:shadow-[1rem_1rem_0rem_#390B26] after:right-0 after:shadow-[1rem_-1rem_0rem_#390B26]"
                        : "before:left-0 before:top-[-3rem] before:shadow-[-1rem_1rem_0rem_#390B26] after:left-0 after:shadow-[-1rem_-1rem_0rem_#390B26]"
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
