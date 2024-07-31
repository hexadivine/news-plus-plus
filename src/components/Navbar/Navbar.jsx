import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { fetchNewsWithMultipleKeys } from "../../modules/fetchNews.modules";

function Navbar({
    toggleLeftSidebar,
    setToggleLeftSidebar,
    toggleRightSidebar,
    setToggleRightSidebar,
    setSearchNews,
    onBlurSearchNewsByInput,
}) {
    return (
        <div className="flex h-[11.5rem] justify-center items-center gap-[2rem] ">
            <div className="bg-[#58585830] rounded-full p-[1rem]">
                {toggleLeftSidebar ? (
                    <RiMenuFoldFill
                        className="size-[2rem] cursor-pointer"
                        onClick={() => setToggleLeftSidebar((prev) => !prev)}
                    />
                ) : (
                    <RiMenuUnfoldFill
                        className="size-[2rem] cursor-pointer"
                        onClick={() => setToggleLeftSidebar((prev) => !prev)}
                    />
                )}
            </div>
            <div className="flex w-[15rem] h-[4rem] justify-center items-center bg-[#58585830]  text-center rounded-full">
                News++
            </div>
            <div className="">
                <input
                    type="text"
                    className="bg-[#58585830] h-[4rem] rounded-full text-center focus:placeholder-transparent focus:outline-none"
                    placeholder="Search"
                    onChange={(event) => setSearchNews(event.target.value)}
                    onBlur={(event) => onBlurSearchNewsByInput(event.target.value)}
                />
            </div>
            <div className="flex  justify-center items-center w-[15rem] h-[4rem] bg-[#58585830]  gap-[1rem] rounded-full">
                <img src="/cloud-sun.png" alt="cloud" className="h-[2.5rem] w-[2.5rem]" />
                <div>23°c</div>
            </div>
            <div className="bg-[#58585830] rounded-full p-[1rem]">
                {!toggleRightSidebar ? (
                    <RiMenuFoldFill
                        className="size-[2rem] cursor-pointer"
                        onClick={() => setToggleRightSidebar((prev) => !prev)}
                    />
                ) : (
                    <RiMenuUnfoldFill
                        className="size-[2rem] cursor-pointer"
                        onClick={() => setToggleRightSidebar((prev) => !prev)}
                    />
                )}
            </div>
        </div>
    );
}

export default Navbar;
