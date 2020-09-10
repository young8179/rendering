
function renderRestaurants(restaurants) {
    
    let htmlString = "";
    for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i];
        let dollar = "$";
        htmlString += `
        <div class="rounded" style="
        background-color: lightgray; 
        width: 300px; 
        text-align: left; 
        padding: 10px; 
        margin: 20px;">
        <p style="margin: 0px; font-size: 40px; font-weight: bold;">${restaurant.name}</p><p style="margin: 0px; color: gray;">${restaurant.type}</p><p style="margin: 0px; color: green; font-size: 30px;">${dollar.repeat(restaurant.priceRating)}</p></div>
        `
        
    }

    return `
        <div class="text-center mt-5">
            ${htmlString}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}