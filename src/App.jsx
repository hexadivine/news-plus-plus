import "./App.css";
import HeroSection from "./components/Main/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import CategoriesSidebar from "./components/Sidebar/CategoriesSidebar";
import CountriesSidebar from "./components/Sidebar/CountriesSidebar";
import { useState } from "react";

function App() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCountry, setSelectedCountry] = useState();

    const [toggleLeftSidebar, setToggleLeftSidebar] = useState(true);
    const [toggleRightSidebar, setToggleRightSidebar] = useState(true);

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
                />

                <HeroSection />
            </div>
            {toggleRightSidebar ? (
                <CountriesSidebar
                    country={selectedCountry}
                    selectCountry={setSelectedCountry}
                />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
