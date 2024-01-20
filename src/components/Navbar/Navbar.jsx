import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

function Navbar({
    toggleLeftSidebar,
    setToggleLeftSidebar,
    toggleRightSidebar,
    setToggleRightSidebar,
}) {
    return (
        <div className="flex h-[115px] justify-center items-center gap-[20px] ">
            <div className="bg-[#58585830] rounded-full p-[10px]">
                {toggleLeftSidebar ? (
                    <RiMenuFoldFill
                        className="size-[20px] cursor-pointer"
                        onClick={() => setToggleLeftSidebar((prev) => !prev)}
                    />
                ) : (
                    <RiMenuUnfoldFill
                        className="size-[20px] cursor-pointer"
                        onClick={() => setToggleLeftSidebar((prev) => !prev)}
                    />
                )}
            </div>
            <div className="flex w-[150px] h-[40px] justify-center items-center bg-[#58585830]  text-center rounded-full">
                News++
            </div>
            <div className="">
                <input
                    type="text"
                    className="bg-[#58585830] h-[40px] rounded-full text-center focus:placeholder-transparent focus:outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="flex  justify-center items-center w-[150px] h-[40px] bg-[#58585830]  gap-[10px] rounded-full">
                <img src="/cloud-sun.png" alt="cloud" className="h-[25px] w-[25px]" />
                <div>23°c</div>
            </div>
            <div className="bg-[#58585830] rounded-full p-[10px]">
                {!toggleRightSidebar ? (
                    <RiMenuFoldFill
                        className="size-[20px] cursor-pointer"
                        onClick={() => setToggleRightSidebar((prev) => !prev)}
                    />
                ) : (
                    <RiMenuUnfoldFill
                        className="size-[20px] cursor-pointer"
                        onClick={() => setToggleRightSidebar((prev) => !prev)}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;
