export const searchFoodAPI = (seachParam, api_id, api_key, dietType) => {
  if (!dietType)
    return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${seachParam}&app_id=${api_id}&app_key=${api_key}`);
  else {
    return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${seachParam}&app_id=${api_id}&app_key=${api_key}&diet=${dietType}`);
  }
};

