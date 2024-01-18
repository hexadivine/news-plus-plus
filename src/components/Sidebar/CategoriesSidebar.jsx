import Sidebar from "./Sidebar";
import { categories } from "../../config/config";

function CategoriesSidebar({category, selectCategory}) {
    return <>
        <Sidebar selectElement={selectCategory}  element={category} list={categories} searchBy={'categories'} />
    </>
}

export default CategoriesSidebar;