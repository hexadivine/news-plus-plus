import React from "react";
import { useEffect } from "react";
import { fetchNewsWithMultipleKeys } from "../../modules/fetchNews.modules";
import { countryCodes, findUniqeArticlesByTitles } from "../../config/config";

function HeroSection({ setNewsDict, searchBy, newsDict, category, country }) {
    return (
        <div className="bg-red-300 h-[calc(100vh-11.5rem)] rounded-t-[2rem] mx-[3rem] bg-[rgba(88,88,88,0.19)] p-[2rem]">
            <div
                id="news-board"
                className="transition-all duration-1000 ease-in-out h-full grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr)] gap-[1.5em] mx-auto pt-[2rem] overflow-y-scroll no-scrollbar "
            >
                {newsDict
                    ?.filter(
                        (
                            news // look for selected country
                        ) =>
                            country?.toLowerCase() === "global" // if not selected default is 'global'
                                ? true
                                : news.country.includes(country.toLowerCase())
                    )
                    ?.filter(
                        (news) =>
                            news?.title?.toLowerCase().includes(searchBy.toLowerCase()) ||
                            news?.description?.toLowerCase().includes(searchBy.toLowerCase())
                    ) // look for searched value in title and description
                    ?.filter((news) =>
                        category.toLowerCase() === "all" // look for category
                            ? true // if not selected default is 'all'
                            : news.category?.includes(category.toLowerCase())
                    )
                    .map((news, index) => (
                        <div
                            key={index}
                            className={` flex flex-col justify-end cursor-pointer bg-[#58585830] bg-center h-full p-[2rem] rounded-[1rem] shadow-[0_-15rem_20rem_inset_black] ${
                                news?.title?.length + news?.description?.length < 150
                                    ? `col-span-1 row-span-1`
                                    : news?.title?.length + news?.description?.length < 200
                                      ? `col-span-1 row-span-2 lg:col-span-1 lg:row-span-1`
                                      : news?.title?.length + news?.description?.length < 250
                                        ? `col-span-2 row-span-1 sm:col-span-1 sm:row-span-1`
                                        : news?.title?.length + news?.description?.length >= 300
                                          ? `col-span-1 row-span-3 sm:col-span-1 sm:row-span-1`
                                          : `col-span-2 row-span-3 sm:col-span-1 sm:row-span-1`
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
                            <div className="news_text flex flex-col justify-end pt-[10rem]">
                                <b className="text-[2rem] text-white opacity-100 mb-[1rem]">
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
