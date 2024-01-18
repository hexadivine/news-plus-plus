import Sidebar from "./Sidebar";
import { countries } from "../../config/config";

function CountriesSidebar({selectCountry, country}) {
    return <>
        <Sidebar element={country} selectElement={selectCountry} list={countries} searchBy={'countries'}/>
    </>
}

export default CountriesSidebar;