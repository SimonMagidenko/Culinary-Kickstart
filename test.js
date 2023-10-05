const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f09a7c9f&app_key=523b59859d52e18cbb0c6555e15e9729';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the data here
        console.log(data);
    })
    .catch(error => {
        // Handle any errors here
        console.error('There was a problem with the fetch operation:', error);
    });