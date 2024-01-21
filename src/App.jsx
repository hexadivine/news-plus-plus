import { useState, useEffect } from "react";
import "./App.css";
// import modules
import { fetchNewsWithMultipleKeys } from "./modules/fetchNews.modules";
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

    useEffect(() => {
        fetchNewsWithMultipleKeys("&category=business,politics,science,technology,world ").then(
            (response) => {
                // console.log("logging response");
                // console.log(response);
                setNewsDict(newsDict.concat(response));
            }
        );
    }, []);

    return (
        <div
            className={`grid grid-flow-col ${
                toggleLeftSidebar && toggleRightSidebar
                    ? "grid-cols-[200px_1fr_200px]"
                    : toggleLeftSidebar
                      ? "grid-cols-[200px_1fr]"
                      : toggleRightSidebar
                        ? "grid-cols-[1fr_200px]"
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
