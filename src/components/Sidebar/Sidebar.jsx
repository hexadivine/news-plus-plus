import React from "react";

function Sidebar({ list, searchBy }) {
    return (
        <div className="bg-[#8a8a8a]/25 h-screen ">
            <div className="sticky top-0 pt-[80px] pb-[70px] text-center">
                <input
                    type="text"
                    className=" w-[150px] h-[34px]  py-[10px] px-[20px] bg-transparent rounded-b-[10px] border-b-[1px] text-center placeholder-slate-50 placeholder:text-[14px] focus:outline-none"
                    placeholder={`search ${searchBy}`}
                />
            </div>
            <ul className="grid align-center text-center overflow-scroll no-scrollbar h-[70vh]">
                {list.map((element, index) => (
                    <li className="list-none cursor-pointer py-[24px] " key={index}>
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
