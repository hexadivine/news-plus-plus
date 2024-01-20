import React from "react";

function HeroSection({ newsDict, newsDictBackup, category }) {
    return (
        <div className=" h-[calc(100vh-115px)] rounded-t-[20px] mx-[30px] bg-[rgba(88,88,88,0.19)] p-[20px]">
            <div className="h-full grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1.5em] mx-auto pt-[20px] overflow-y-scroll no-scrollbar ">
                {newsDict[category.toLowerCase()]?.map((news, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-end cursor-pointer bg-[#58585830] bg-center min-h-[300px] p-[20px] rounded-[10px]   overflow-y-scroll no-scrollbar shadow-[0_-150px_200px_inset_black] ${
                            news.title.length + news.description.length < 150
                                ? `sm:col-span-1 sm:row-span-1 `
                                : news.title.length + news.description.length < 300
                                  ? Math.random() < 0.5
                                      ? `sm:col-span-2 sm:row-span-1`
                                      : `sm:col-span-1 sm:row-span-2`
                                  : news.title.length + news.description.length >= 300
                                    ? `sm:col-span-2 sm:row-span-2`
                                    : ``
                        }`}
                        style={{
                            backgroundImage: `url(${news.urlToImage === "" || news.urlToImage === null || news.urlToImage.includes("cdn.vox-cdn.com") ? "/news_pattern_bg.jpg" : news.urlToImage})`,
                            backgroundSize: "cover",
                            backgroundColor: `${news.urlToImage === "" || news.urlToImage === null || news.urlToImage.includes("cdn.vox-cdn.com") ? "#58585830" : "#390b2686"}`,
                            backgroundBlendMode: "multiply",
                            // boxShadow: "0 -150px 200px inset black",
                            // gridTemplateColumns: 'repeat("auto-fit", minmax("300px", "1fr"))',
                        }}
                    >
                        <b className="text-[20px] text-white opacity-100 mb-[10px]">
                            {news.title} - {index}{" "}
                        </b>
                        <p className="text-[gray]">{news.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeroSection;
