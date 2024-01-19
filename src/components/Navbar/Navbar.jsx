import React from "react";

function Navbar() {
    return (
        <div className="flex h-[115px] justify-center items-center gap-[20px] ">
            <div className="flex w-[150px] h-[40px] justify-center items-center bg-[#ffffff30]  text-center rounded-full">
                News++
            </div>
            <div className="">
                <input type="text" className="h-[40px] rounded-full" />
            </div>
            <div className="flex  justify-center items-center w-[150px] h-[40px] bg-[#ffffff30]  gap-[10px] rounded-full">
                <img
                    src="/cloud-sun.png"
                    alt="cloud"
                    className="h-[25px] w-[25px] bg-[#ffffff30] "
                />
                <div>23°c</div>
            </div>
        </div>
    );
}

export default Navbar;
