
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    return `
        <div class="text-center mt-5 ">
            <div class = "mb-3" style=" width:200px; height:200px; border-radius:${circles[0].radius}%; background-color:${circles[0].color};"></div>
            <div class = "mb-3" style=" margin-left: 50px; width:100px; height:100px; border-radius:${circles[0].radius}%; background-color:${circles[1].color};"></div>
            <div class = "mb-3" style=" width:200px; height:200px; border-radius:${circles[0].radius}%; background-color:${circles[2].color};"></div>
            <div style="margin-left: 75px; width:50px; height:50px; border-radius:${circles[0].radius}%; background-color:${circles[3].color};"></div>    
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}