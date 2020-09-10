
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    let htmlString = "";
    for (let i = 0; i < pokerHand.length; i++) {
        const card = pokerHand[i];
        htmlString += `
        <img src="cards/${card.value}${card.suit}.png">
        `
    }
    
    return `
        <div class="text-center mt-5">
            ${htmlString}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}