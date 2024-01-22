import React from "react";
import { useEffect } from "react";
import { fetchNewsWithMultipleKeys } from "../../modules/fetchNews.modules";
import { countryCodes, findUniqeArticlesByTitles } from "../../config/config";
import InfiniteScroll from "react-infinite-scroll-component";

function HeroSection({ setNewsDict, searchBy, newsDict, category, country }) {
    return (
        <div className=" h-[calc(100vh-115px)] rounded-t-[20px] mx-[30px] bg-[rgba(88,88,88,0.19)] p-[20px]">
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
                            className={` flex flex-col justify-end cursor-pointer bg-[#58585830] bg-center h-full p-[20px] rounded-[10px] shadow-[0_-150px_200px_inset_black] ${
                                news?.title?.length + news?.description?.length < 150
                                    ? `sm:col-span-1 sm:row-span-1`
                                    : news?.title?.length + news?.description?.length < 200
                                      ? `sm:col-span-2 sm:row-span-1`
                                      : news?.title?.length + news?.description?.length < 250
                                        ? `sm:col-span-1 sm:row-span-2`
                                        : news?.title?.length + news?.description?.length >= 300
                                          ? `sm:col-span-2 sm:row-span-2`
                                          : `sm:col-span-1 sm:row-span-1`
                            }`}
                            style={{
                                backgroundImage: `url(${news?.image_url === "" || news?.image_url === null ? "/news_pattern_bg.jpg" : news?.image_url})`,
                                backgroundSize: "cover",
                                backgroundColor: `${news?.image_url === "" || news?.image_url === null ? "#58585830" : "#390b2686"}`,
                                backgroundBlendMode: "multiply",
                            }}
                        >
                            <div className="h-full flex gap-1">
                                {news?.country?.map((country_name, index) => (
                                    <img
                                        src={
                                            "https://flagsapi.com/" +
                                            countryCodes[
                                                Object.keys(countryCodes).find(
                                                    (value) =>
                                                        value.toLowerCase() ===
                                                        country_name.toLowerCase()
                                                )
                                            ].toUpperCase() +
                                            "/flat/32.png"
                                        }
                                        className="size-5"
                                        alt={`${country_name} - ${countryCodes[Object.keys(countryCodes).find((value) => value.toLowerCase() === country_name.toLowerCase())].toUpperCase()}`}
                                        key={index}
                                        title={country_name}
                                    />
                                ))}
                            </div>
                            <div className="news_text flex flex-col justify-end pt-[100px]">
                                <b className="text-[20px] text-white opacity-100 mb-[10px]">
                                    {news?.title}
                                </b>
                                <p className="text-[gray]">{news?.pubDate}</p>
                                <p className="text-[gray]">{news?.description?.slice(0, 500)}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HeroSection;
