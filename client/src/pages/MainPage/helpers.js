import { QUERY_GRAB_API } from "../../utils/queries";
import { useState } from "react";
import { mealTypeCard } from "../../components/MealTypeCard/index"

export const searchFoodbyMealTypeAPI = (api_id, api_key, mealType) => {
    return fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${api_id}&app_key=${api_key}&=${mealType}`);
};

export const mealTypeClickHandler = (mealType) => {
    const [mealType, setMealType] = UseState("")
    if (mealType === mealTypeCard) {
        setMealType(null);
    } else {
        setMealType(mealType);
    }
};

export const breakfestImage =
    "https://images.unsplash.com/photo-1595923610180-8b719b76d033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80&auto=format&fit=crop&w=1350&q=80";

export const lunchImage =
    "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80&auto=format&fit=crop&w=2670&q=80&auto=format&fit=crop&w=2670&q=80&auto=format&fit=crop&w=1350&q=80";

export const dinnerImage =
    "https://images.unsplash.com/photo-1505932049984-db368d92fa63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80&auto=format&fit=crop&w=2670&q=80&auto=format&fit=crop&w=1350&q=80";

export const snackImage =
    "https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80&auto=format&fit=crop&w=2670&q=80&auto=format&fit=crop&w=1350&q=80";

