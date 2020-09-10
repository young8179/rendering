
function renderNametags(nametags) {
    let htmlString = "";
    for (let i = 0; i < nametags.length; i++) {
        const nametag = nametags[i];
        htmlString +=`
            <div style=
                "width: 500px; 
                background-color: blue; 
                border: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 0px;"><p style="color:white;">Hello, my name is: </p></div>
            <div style="width: 500px;
                        height: 100px;
                        border: 1px solid black;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        "><p style=" ">${nametags[i]}</p></div>`
    }
    
    return `
        <div class="text-center mt-5 container">
            ${htmlString}   
        
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}