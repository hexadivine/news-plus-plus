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
            <div className="bg-[#ffffff30] h-screen text-center">
                <input
                    type="text"
                    name="search"
                    className=" mt-[60px] mb-[34px] w-[150px] h-[50px]  py-[10px] px-[20px] bg-transparent rounded-[10px] border-[1px] text-center placeholder-[#fff]/40 placeholder:text-[14px] focus:outline-none bg-[#390b26] placeholder-shown:bg-transparent"
                    placeholder={`Search ${searchBy}`}
                    onChange={(event) =>
                        setDynamicList(
                            list.filter((element) =>
                                element
                                    .toLowerCase()
                                    .includes(event.target.value.toLowerCase())
                            )
                        )
                    }
                />
                <ul className="grid pt-[30px] pb-[30px] text-center overflow-scroll no-scrollbar max-h-[80vh]">
                    {dynamicList.map((listElement, index) => (
                        <li
                            className={`h-[60px] relative list-none cursor-pointer  leading-[60px] ${
                                element === listElement
                                    ? `bg-[#390B26] before:rounded-[50%] after:rounded-[50%] before:block after:block before:bg-transparent after:bg-transparent  before:size-[30px] after:size-[30px] before:absolute after:absolute ${
                                          searchBy === "categories"
                                              ? "before:right-0 before:top-[-30px] before:shadow-[10px_10px_0px_#390B26] after:shadow-[10px_-10px_0px_#390B26] after:right-0"
                                              : "before:left-0 before:top-[-30px] before:shadow-[-10px_10px_0px_#390B26] after:shadow-[-10px_-10px_0px_#390B26] after:left-0"
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
