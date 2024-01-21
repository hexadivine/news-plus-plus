import React from "react";
import { useEffect } from "react";
import { fetchNewsWithMultipleKeys } from "../../modules/fetchNews.modules";

function HeroSection({ setNewsDict, searchBy, newsDict, newsDictBackup, category }) {
    // useEffect(() => {
    //     if (newsDict[category] === undefined);
    // }, [category]);

    // filter(
    //     (news) =>
    //         news.title.toLowerCase().includes(searchBy.toLowerCase()) ||
    //         news.description.toLowerCase().includes(searchBy.toLowerCase())
    // )

    // useEffect(() => {
    //     function removeDuplicate() {
    //         let articleId = {};
    //         for (let i = 0; i < newsDict.length; i++) {
    //             if (articleId[newsDict[i].articleId] === undefined)
    //                 articleId[newsDict[i].article_id] = true;
    //             else {
    //                 newsDict.splice(i, 0);
    //             }
    //         }
    //     }
    // }, [newsDict]);

    useEffect(() => {
        if (category?.toLowerCase() === "all") return;

        fetchNewsWithMultipleKeys(`&category=${category?.toLowerCase()}`).then((response) => {
            if (response === undefined) return;
            setNewsDict((prevNews) => [...new Set(response), ...prevNews]);
        });
    }, [category]);

    console.log(newsDict);
    console.log(category);
    return (
        <div className="transition-all duration-1000 ease-in-out relative h-[calc(100vh-115px)] rounded-t-[20px] mx-[30px] bg-[rgba(88,88,88,0.19)] p-[20px]">
            <div className="transition-all duration-1000 ease-in-out h-full grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1.5em] mx-auto pt-[20px] overflow-y-scroll no-scrollbar ">
                {/* {JSON.stringify(newsDict)} */}
                {/* {JSON.stringify(newsDict.map((k) => JSON.stringify(k.title)))} */}

                {newsDict
                    ?.filter((news) => news?.title?.toLowerCase().includes(searchBy.toLowerCase()))
                    ?.filter((news) => {
                        if (category.toLowerCase() === "all") return true;
                        else return news.category?.includes(category.toLowerCase());
                    })
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
                                // boxShadow: "0 -150px 200px inset black",
                                // gridTemplateColumns: 'repeat("auto-fit", minmax("300px", "1fr"))',
                            }}
                        >
                            <b className="text-[20px] text-white opacity-100 mb-[10px]">
                                {news?.title} - {index}{" "}
                            </b>
                            <p className="text-[gray]">{news?.description?.slice(0, 300)}...</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HeroSection;
