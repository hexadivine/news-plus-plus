import Sidebar from "./Sidebar";
import { countryCodes } from "../../config/config";

function CountriesSidebar({ selectCountry, country }) {
    return (
        <>
            <Sidebar
                element={country}
                selectElement={selectCountry}
                list={Object.keys(countryCodes)}
                searchBy={"countries"}
            />
        </>
    );
}

export default CountriesSidebar;
