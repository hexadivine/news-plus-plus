import Sidebar from "./Sidebar";
import { categories } from "../../config/config";

function CategoriesSidebar() {
    return <>
        <Sidebar list={categories} searchBy={'categoies'} />
    </>
}

export default CategoriesSidebar;