import React from "react";
import { useEffect } from "react";
import { fetchNewsWithMultipleKeys } from "../../modules/fetchNews.modules";
import { countryCodes } from "../../config/config";

function HeroSection({ setNewsDict, searchBy, newsDict, category, country }) {
    useEffect(() => {
        console.log(newsDict);
        if (newsDict.length !== 0)
            fetchNewsWithMultipleKeys(
                `${category?.toLowerCase() !== "all" ? "&category=" + category.toLowerCase() : ""}${country.toLowerCase() !== "global" ? "&country=" + countryCodes[country] : ""}`
            ).then((response) => {
                if (response === undefined) return;
                setNewsDict((prevNews) => [...new Set([...response, ...prevNews])]);
            });
    }, [category, country]);

    // console.log(newsDict);
    // console.log(category);
    return (
        <div className="transition-all duration-1000 ease-in-out relative h-[calc(100vh-115px)] rounded-t-[20px] mx-[30px] bg-[rgba(88,88,88,0.19)] p-[20px]">
            <div className="transition-all duration-1000 ease-in-out h-full grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1.5em] mx-auto pt-[20px] overflow-y-scroll no-scrollbar ">
                {newsDict
                    ?.filter((news) =>
                        country?.toLowerCase() === "global"
                            ? true
                            : news.country.includes(country.toLowerCase())
                    )
                    ?.filter((news) => news?.title?.toLowerCase().includes(searchBy.toLowerCase()))
                    ?.filter((news) =>
                        category.toLowerCase() === "all"
                            ? true
                            : news.category?.includes(category.toLowerCase())
                    )
                    .map((news, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-end cursor-pointer bg-[#58585830] bg-center min-h-[300px] p-[20px] rounded-[10px]  overflow-y-scroll no-scrollbar shadow-[0_-150px_200px_inset_black] ${
                                news?.title?.length + news?.description?.length < 150
                                    ? `sm:col-span-1 sm:row-span-1 `
                                    : news?.title?.length + news?.description?.length < 200
                                      ? Math.random() < 0.5
                                          ? `sm:col-span-2 sm:row-span-1`
                                          : `sm:col-span-1 sm:row-span-3`
                                      : news?.title?.length + news?.description?.length < 300
                                        ? Math.random() < 0.5
                                            ? `sm:col-span-1 sm:row-span-3`
                                            : `sm:col-span-2 sm:row-span-3`
                                        : news?.title?.length + news?.description?.length >= 300
                                          ? `sm:col-span-2 sm:row-span-3`
                                          : ``
                            }`}
                            style={{
                                backgroundImage: `url(${news?.image_url === "" || news?.image_url === null ? "/news_pattern_bg.jpg" : news?.image_url})`,
                                backgroundSize: "cover",
                                backgroundColor: `${news?.image_url === "" || news?.image_url === null ? "#58585830" : "#390b2686"}`,
                                backgroundBlendMode: "multiply",
                            }}
                        >
                            {/* <div className="flags">
                                {news?.country?.map((country_name, index) => (
                                    <img
                                        src={`url(https://flagsapi.com/${countryCodes[Object.keys(countryCodes).find((value) => value.toLowerCase() === country_name.toLowerCase())]}/flat/64.png)`}
                                        className="size-10"
                                        alt={`${country_name} - ${Object.keys(countryCodes).find((value) => value.toLowerCase() === country_name.toLowerCase())}`}
                                        key={index}
                                    />
                                ))}
                            </div> */}
                            <b className="text-[20px] text-white opacity-100 mb-[10px]">
                                {news?.title}
                            </b>
                            <p className="text-[gray]">{news?.pubDate}</p>
                            <p className="text-[gray]">{news?.description?.slice(0, 300)}...</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HeroSection;
