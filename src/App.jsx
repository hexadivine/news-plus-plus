import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CategoriesSidebar from "./components/Sidebar/CategoriesSidebar";
import CountriesSidebar from "./components/Sidebar/CountriesSidebar";
import { useState } from "react";

function App() {

    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedCountry, setSelectedCountry] = useState();

    return (
        <div className="grid grid-flow-col grid-cols-[200px_1fr_200px]">
            <CategoriesSidebar category={selectedCategory} selectCategory={setSelectedCategory} />
            <div className="bg-gradient-to-r from-[#390b26]  via-[#020618] via-[#020618] via-[#020618]  to-[#390b26]">
                <Navbar />
            </div>
            <CountriesSidebar country={selectedCountry} selectCountry={setSelectedCountry} />
        </div>
    );
}

export default App;
