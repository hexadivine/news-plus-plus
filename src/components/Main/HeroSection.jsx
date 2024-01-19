import React from "react";

function HeroSection() {
    const n = 20;
    const a = [];
    for (let i = 0; i < n; i++) {
        a.push(i);
    }

    return (
        <div className=" h-[calc(100vh-115px)] rounded-t-[20px] mx-[30px] bg-[#58585830] ">
            <div className="relative h-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-flow-dense gap-[10px] w-[95%] mx-auto pt-[20px] overflow-y-scroll no-scrollbar">
                <div className="bg-black min-h-[200px] col-span-2 overflow-hidden">
                    1
                </div>
                <div className="bg-black min-h-[200px] col-span-2 row-span-2 overflow-hidden">
                    2
                </div>
                <div className="bg-black min-h-[200px] col-span-2 row-span-2 overflow-hidden">
                    3
                </div>
                <div className="bg-black min-h-[200px] col-span-2 row-span-2 overflow-hidden">
                    4
                </div>
                <div className="bg-black min-h-[200px] col-span-2 row-span-2 overflow-hidden">
                    5
                </div>
                <div className="bg-black min-h-[200px] col-span-2 row-span-2 overflow-hidden">
                    6
                </div>
                <div className="bg-black min-h-[200px] overflow-hidden">7</div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
                <div className="bg-black min-h-[200px] overflow-hidden"></div>
            </div>
        </div>
    );
}

export default HeroSection;
