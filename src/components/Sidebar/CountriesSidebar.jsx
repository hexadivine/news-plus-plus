import Sidebar from "./Sidebar";
import { countries } from "../../config/config";

function CountriesSidebar() {
    return <>
        <Sidebar list={countries} searchBy={'countries'}/>
    </>
}

export default CountriesSidebar;