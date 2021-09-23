// OBJECTIVE 1
$(document).ready(() => { 
// 1

let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("The day is yours!!")
});

//2
let $button2 = $("#sbt");
$button2.click( function () {
    let message = $("text-box").val();
    alert(message);
});

//3


const getRandomColor = () => {
    const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
    return myRandomColor;
}


$('#divBox').mouseenter ((event) => {
    const thisRandomColor = getRandomColor();
    $(event.target).css('background-color', thisRandomColor);
})
$('#divBox').mouseleave ((event) => {
    $(event.target).css('background-color', '#3b4249');
})


$('#pText').click ((event) => {
    const thisRandomColor = getRandomColor();
    $(event.target).css('color', thisRandomColor);
})

})