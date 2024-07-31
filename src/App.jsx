import { useState, useEffect } from "react";
import "./App.css";
// import modules
import { fetchNewsWithMultipleKeys } from "./modules/fetchNews.modules";
import { countryCodes, findUniqeArticlesByTitles } from "./config/config";

// import components
import HeroSection from "./components/Main/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import CategoriesSidebar from "./components/Sidebar/CategoriesSidebar";
import CountriesSidebar from "./components/Sidebar/CountriesSidebar";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState("global");
    const [searchNews, setSearchNews] = useState("");

    const [toggleLeftSidebar, setToggleLeftSidebar] = useState(true);
    const [toggleRightSidebar, setToggleRightSidebar] = useState(true);

    const [newsDict, setNewsDict] = useState([]);
    // first time news load
    useEffect(() => {
        fetchNewsWithMultipleKeys("&category=business,politics,science,technology,world")
            .then((responses) => {
                setNewsDict(findUniqeArticlesByTitles(newsDict.concat(responses.results)));
            })
            .catch((error) => console.log(error));
    }, []);

    // on scroll news load for infinite scrolling effect
    useEffect(() => {
        const newsBoard = document.getElementById("news-board");
        let allowFetching = true;
        let nextPage = null;

        function scrollEvent(e) {
            if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight - 10) {
                if (allowFetching) {
                    allowFetching = false;
                    fetchNewsWithMultipleKeys(
                        `${selectedCategory?.toLowerCase() !== "all" ? "&category=" + selectedCategory.toLowerCase() : ""}${selectedCountry.toLowerCase() !== "global" ? "&country=" + countryCodes[selectedCountry] : ""}${nextPage !== null ? "&page=" + nextPage : ""}`
                    )
                        .then((responses) => {
                            setNewsDict((prevNews) =>
                                findUniqeArticlesByTitles([...prevNews, ...responses.results])
                            );
                            nextPage = responses.nextPage;
                            allowFetching = true;
                        })
                        .catch((error) => console.log(error));
                }
            }
        }

        newsBoard.addEventListener("scroll", scrollEvent);
        return () => newsBoard.removeEventListener("scroll", scrollEvent);
    }, [selectedCategory, selectedCountry]);

    // show news based on category or country change
    useEffect(() => {
        console.log(newsDict);
        if (newsDict.length !== 0)
            fetchNewsWithMultipleKeys(
                `${selectedCategory?.toLowerCase() !== "all" ? "&category=" + selectedCategory.toLowerCase() : ""}${selectedCountry.toLowerCase() !== "global" ? "&country=" + countryCodes[selectedCountry] : ""}`
            )
                .then((responses) => {
                    setNewsDict((prevNews) =>
                        findUniqeArticlesByTitles(responses.results.concat(prevNews))
                    );
                })
                .catch((error) => console.log(error));
    }, [selectedCategory, selectedCountry]);

    function searchNewsByInput(query) {
        if (query === "") return;
        fetchNewsWithMultipleKeys("&q=" + query)
            .then((responses) => {
                setNewsDict((prevDict) =>
                    findUniqeArticlesByTitles(prevDict.concat(responses.results))
                );
            })
            .catch((error) => console.log(error));
    }

    return (
        <div
            className={`grid grid-flow-col ${
                toggleLeftSidebar && toggleRightSidebar
                    ? "grid-cols-[20rem_1fr_20rem]"
                    : toggleLeftSidebar
                      ? "grid-cols-[20rem_1fr]"
                      : toggleRightSidebar
                        ? "grid-cols-[1fr_20rem]"
                        : ""
            }`}
        >
            {toggleLeftSidebar ? (
                <CategoriesSidebar
                    category={selectedCategory}
                    selectCategory={setSelectedCategory}
                />
            ) : (
                ""
            )}

            <div className="h-screen bg-gradient-to-r from-[#390b26]  via-[#020618] via-[#020618] via-[#020618]  to-[#390b26]">
                <Navbar
                    toggleLeftSidebar={toggleLeftSidebar}
                    setToggleLeftSidebar={setToggleLeftSidebar}
                    toggleRightSidebar={toggleRightSidebar}
                    setToggleRightSidebar={setToggleRightSidebar}
                    setSearchNews={setSearchNews}
                    onBlurSearchNewsByInput={searchNewsByInput}
                />
                <HeroSection
                    searchBy={searchNews}
                    setNewsDict={setNewsDict}
                    newsDict={newsDict}
                    category={selectedCategory}
                    country={selectedCountry}
                />
                {/* {JSON.stringify(newsDict)} */}
            </div>
            {toggleRightSidebar ? (
                <CountriesSidebar country={selectedCountry} selectCountry={setSelectedCountry} />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
