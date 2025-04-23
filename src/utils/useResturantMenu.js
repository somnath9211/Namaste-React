import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constent.jsx";


const useResturantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuData, setMenuData] = useState([]); // State to store menu data

    useEffect(() => {
        fetchData(resId);
    })

    const fetchData = async (resId) => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info); // Set restaurant data
        setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') || []); // Set menu data
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return { resInfo, menuData };
}

export default useResturantMenu;